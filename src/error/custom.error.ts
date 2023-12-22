export class CustomError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string) {
    super(400, message);
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message: string) {
    super(401, message);
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string) {
    super(404, message);
  }
}
