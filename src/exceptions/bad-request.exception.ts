export class BadRequestException extends Error {
  private readonly httpCode: number;

  public constructor () {
    super();

    this.httpCode = 400;
  }

  public getHttpCode (): number {
    return this.httpCode;
  }
}
