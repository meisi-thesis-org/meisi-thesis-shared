export class NonFoundException extends Error {
  private readonly httpCode: number;

  public constructor () {
    super();

    this.httpCode = 404;
  }

  public getHttpCode (): number {
    return this.httpCode;
  }
}
