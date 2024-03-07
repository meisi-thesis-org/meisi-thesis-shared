import { randomBytes, scrypt, timingSafeEqual } from 'crypto';
import { InternalServerException } from '../exceptions/internal-server.exception';

export class HashProvider {
  private genSalt (): string {
    return randomBytes(16).toString('hex')
  }

  public async hash (data: string | Buffer): Promise<string> {
    return await new Promise((resolve, reject) => {
      const salt = this.genSalt();

      scrypt(data, salt, 64, (err, derivedKey) => {
        if (err != null) reject(new InternalServerException());
        resolve(`${salt}.${derivedKey.toString('hex')}`);
      });
    });
  }

  public async compare (rawData: string, hashedData: string): Promise<boolean> {
    return await new Promise((resolve, reject) => {
      const [salt, hashKey] = hashedData.split('.');
      const hashKeyBuff = Buffer.from(hashKey, 'hex');

      scrypt(rawData, salt, 64, (err, derivedKey) => {
        if (err != null) reject(new InternalServerException());
        resolve(timingSafeEqual(hashKeyBuff, derivedKey));
      });
    });
  }
}
