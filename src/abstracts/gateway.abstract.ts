export abstract class Gateway<T> {
  protected constructor (
    protected readonly router: T
  ) {}

  public abstract subscribe (): T;
}
