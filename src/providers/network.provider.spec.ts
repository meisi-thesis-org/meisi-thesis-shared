import { describe, expect, it } from 'vitest';
import { NetworkProvider } from './network.provider';

describe('NetworkProvider', () => {
  const instance = new NetworkProvider();

  it('should have an instanceOf NetworkProvider', () => {
    expect(instance).toBeInstanceOf(NetworkProvider)
  })
})
