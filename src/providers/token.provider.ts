import { type JwtPayload, sign, verify } from 'jsonwebtoken';
import { InternalServerException } from '../exceptions/internal-server.exception';
import { NoAuthorizationException } from '../exceptions/no-authorization.exception';

export class TokenProvider {
  public sign<T extends string | object | Buffer > (
    payload: T,
    expiresIn: '1h' | '1d',
    tokenSecret: string | undefined = undefined
  ): string {
    try {
      return sign(payload, tokenSecret ?? 'secret', { expiresIn });
    } catch (error) {
      throw new InternalServerException();
    }
  }

  public verify (
    token: string,
    tokenSecret: string | undefined
  ): string | JwtPayload {
    try {
      return verify(token, tokenSecret ?? 'secret');
    } catch (error) {
      throw new NoAuthorizationException();
    }
  }
}
