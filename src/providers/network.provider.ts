import axios from 'axios';
import { InternalServerException } from '../exceptions/internal-server.exception';
import { NonFoundException } from '../exceptions/non-found.exception';
import { BadRequestException } from '../exceptions/bad-request.exception';
import { ConflictException } from '../exceptions/conflict.exception';

export class NetworkProvider {
  public async doHttpRequest (
    httpPort: string,
    httpPath: string,
    httpMethod: 'POST' | 'GET' | 'PUT',
    httpHeaders: Record<string, string> | undefined = undefined,
    httpParams: Record<string, string> | undefined = undefined,
    httpBody: Record<string, string | boolean | number> | undefined = undefined
  ): Promise<unknown> {
    return await axios(`http://localhost:${httpPort}/${httpPath}`, {
      method: httpMethod,
      data: httpBody,
      headers: httpHeaders,
      params: httpParams
    }).catch((error) => {
      console.log(error)
      if (error.response.status === 500) throw new InternalServerException();
      if (error.response.status === 400) throw new BadRequestException();
      if (error.response.status === 404) throw new NonFoundException();
      if (error.response.status === 409) throw new ConflictException();
    })
  }
}
