import * as errors from "./errors";

export class ErrorService {
  constructor() {
    this.router = new errors.RouterErrorService();
    this.auth = new errors.AuthErrorService();
    this.database = new errors.DatabaseErrorService();
  }

  router: errors.RouterErrorService;
  auth: errors.AuthErrorService;
  database: errors.DatabaseErrorService;
}
