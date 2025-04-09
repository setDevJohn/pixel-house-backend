export enum HttpStatus {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
  GATEWAY_TIMEOUT = 504
}

function getRandomStatus(): HttpStatus {
  const statusList = [
    HttpStatus.BAD_REQUEST,
    HttpStatus.UNAUTHORIZED,
    HttpStatus.INTERNAL_SERVER_ERROR,
    HttpStatus.GATEWAY_TIMEOUT
  ];
  const randomIndex = Math.floor(Math.random() * statusList.length);
  return statusList[randomIndex];
}

export class RandomError extends Error {
  public readonly statusCode: HttpStatus;

  constructor() {
    const randomStatus = getRandomStatus();
    super(HttpStatus[randomStatus]);
    this.statusCode = randomStatus;

    Object.setPrototypeOf(this, RandomError.prototype);
    Error.captureStackTrace(this);
  }
}
