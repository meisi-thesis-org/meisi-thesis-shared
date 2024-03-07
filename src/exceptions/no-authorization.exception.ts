export class NoAuthorizationException extends Error {
  private readonly httpCode: number;

  public constructor () {
    super();

    this.httpCode = 401;
  }

  public getHttpCode (): number {
    return this.httpCode;
  }
}
