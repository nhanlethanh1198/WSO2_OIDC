import { config } from "../config/";
import * as express from "express";
import { BaseError, IBaseErrorOption } from "../services/errors";
import { errorService, ICrudOption, ICrudExecOption } from "../services";
import * as _ from "lodash";

import Raven = require("raven");

export interface Request extends express.Request {
  queryInfo?: any;
  tokenInfo?: {
    payload?: any;
    role?: any;
    exp?: any;
    [x: string]: any;
  };
  firebaseUserInfo?: any;
  [x: string]: any;
}

export interface Response extends express.Response {
  [x: string]: any;
}

export interface IValidateSchema {
  type?: string | string[];
  properties?: any;
  additionalProperties?: boolean;
  required?: string[];
  uniqueItems?: boolean;
  minItems?: number;
  item?: IValidateSchema;
  [x: string]: any;
}

export class BaseRouter {
  onError(res: Response, error: any) {
    Raven.captureException(error);
    if (!error.options) {
      console.log("UNKNOWN ERROR", error);
      const err = errorService.router.somethingWentWrong();
      res.status(err.options.code).json(err.options);
    } else {
      res.status(error.options.code).json(error.options);
    }
  }

  onSuccess(res: Response, object: any = {}, extras: any = {}) {
    object = object || {};

    if (Object.keys(object).length === 0) {
      res.json({
        code: 200,
      });
    } else {
      res.json({
        code: 200,
        results: Object.assign({ object }, extras),
      });
    }
  }

  onSuccessAsList(
    res: Response,
    objects: any = {},
    extras: any,
    option: ICrudOption = {
      offset: 0,
      limit: config.database.defaultPageSize,
    }
  ) {
    if (objects.toJSON) {
      objects = objects.toJSON();
    }
    const page = _.floor(option.offset / option.limit) + 1;

    res.json({
      code: 200,
      results: Object.assign(
        {
          objects,
        },
        extras
      ),
      pagination: {
        current_page: page,
        next_page: page + 1,
        prev_page: page - 1,
        limit: option.limit,
      },
    });
  }

  // async validateJSON(body: any, schema: IValidateSchema) {
  //   const validate = utilService.validateJSON(schema, body);
  //   if (!validate.isValid) {
  //     throw errorService.router.requestDataInvalid(validate.message);
  //   }
  // }

  // route(func: (req: any, res: Response) => Promise<any>) {
  //   return (req: any, res: Response) =>
  //     func
  //       .bind(this)(req, res)
  //       .catch((error: any) => {
  //         this.onError(res, error);
  //       });
  // }
}
