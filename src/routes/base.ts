import * as express from "express";
import { BaseError, IBaseErrorOption } from "../services/errors";
import { errorService } from "../services";

const Raven = require("raven");

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
    Raven.captureError(error);
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

  //   onSuccessAsList(res: Response, object: any = {}, extras: any)
}
