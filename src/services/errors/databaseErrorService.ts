import { BaseError } from "./base";

class DatabaseException extends BaseError {
  constructor(key: string, message: string, code?: number) {
    super({
      code: code || 500,
      type: `database_exception_${key}`,
      message,
    });
  }
}

export class DatabaseErrorService {
  recordNotFound(message = "Record Not Found") {
    return new DatabaseException("record_not_found", message);
  }
  queryFail(message = "Query Fail") {
    return new DatabaseException("query_fail", message);
  }
  invalidScope(message = "Invalid scope") {
    return new DatabaseException("invalid_scope", message);
  }
  customError(message = "Invalid scope", code: number) {
    return new DatabaseException("invalid_scope", message, code);
  }
}
