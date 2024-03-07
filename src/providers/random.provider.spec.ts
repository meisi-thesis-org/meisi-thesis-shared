import { describe, it, expect } from 'vitest';
import { RandomProvider } from './random.provider';

describe('RandomProvider', () => {
  const instance = new RandomProvider();

  it('should have an instanceOf RandomProvider', () => {
    expect(instance).toBeInstanceOf(RandomProvider);
  })
})
