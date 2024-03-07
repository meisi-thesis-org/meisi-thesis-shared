import { describe, expect, it } from 'vitest';
import { QueueProvider } from './queue.provider'

describe('QueueProvider', () => {
  const instance = new QueueProvider();

  it('should have an instanceOf QueueProvider', () => {
    expect(instance).instanceOf(QueueProvider);
  })
})
