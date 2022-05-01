import { errorService } from ".";
import { BaseError } from "./errors";
import { config } from "../config";

export interface ICrudOption {
  filter?: any;
  limit?: number;
  offset?: number;
  scope?: string[];
  order?: any[];
  attributes?: any;
  include?: any[];
  distinct?: boolean;
  paranoid?: boolean;
  transaction?: any;

  [key: string]: any;
}

export interface ICrudExecOption {
  allowNull?: boolean;
  msg?: string;
}

export class CrudService {}