import { beforeEach, describe, expect, it, vi } from 'vitest';
import { TokenProvider } from './token.provider';
import * as jsonwebtoken from 'jsonwebtoken';

describe('TokenProvider', () => {
  const instance = new TokenProvider();

  it('should have instanceOf TokenProvider', () => {
    expect(instance).toBeInstanceOf(TokenProvider);
  })

  beforeEach(() => {
    vi.mock('jsonwebtoken', () => ({
      sign: vi.fn(),
      verify: vi.fn()
    }))
  })

  describe('sign', () => {
    const dummyPayload = {
      userUuid: 'dummyUuid',
      username: 'dummyUsername'
    }

    const dummyToken = 'dummyToken';

    function callSign (): string {
      return instance.sign(dummyPayload, '1d', 'dummyTokenSecret');
    }

    it('should have a token returned', async () => {
      vi.spyOn(jsonwebtoken, 'sign').mockResolvedValue('dummyToken' as any);
      await expect(callSign()).resolves.toBe(dummyToken)
    })

    it('should throw an exception because an error ocurred creating a token', async () => {
      vi.spyOn(jsonwebtoken, 'sign').mockRejectedValue(new Error());
      await expect(() => callSign()).rejects.toThrow()
    })
  })

  describe('verify', () => {
    const dummyToken = 'dummyToken';

    function callVerify (): string | jsonwebtoken.JwtPayload {
      return instance.verify(dummyToken, 'dummyTokenSecret');
    }

    it('should have a token data returned', async () => {
      vi.spyOn(jsonwebtoken, 'verify').mockResolvedValue('dummyData' as any);
      await expect(callVerify()).resolves.toBe('dummyData')
    })

    it('should throw an exception because an error ocurred verifying a token', async () => {
      vi.spyOn(jsonwebtoken, 'verify').mockRejectedValue(new Error());
      await expect(() => callVerify()).rejects.toThrow()
    })
  })
})
