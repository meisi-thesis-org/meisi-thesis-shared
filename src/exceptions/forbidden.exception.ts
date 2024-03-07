export class ForbiddenExceptionException extends Error {
  private readonly httpCode: number;

  public constructor () {
    super();

    this.httpCode = 403;
  }

  public getHttpCode (): number {
    return this.httpCode;
  }
}
