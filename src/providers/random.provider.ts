import { randomBytes, randomUUID } from 'crypto';

export class RandomProvider {
  public randomUUID (): string {
    return randomUUID().toString();
  }

  public randomString (length: number): string {
    return randomBytes(length).toString('hex');
  }

  public randomDateToIsoString (): string {
    return new Date().toISOString();
  }

  public randomBoolean (): boolean {
    return Math.random() < 0.5;
  }

  public randomNumber (): number {
    return Math.random() * 100;
  }
}
