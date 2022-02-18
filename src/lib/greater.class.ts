/**
 * The `Greater` primitive wrapper `object` represents the primitive value of `number` type greater than the given.
 */
export class Greater<Value extends number> extends Number {
  /**
   * The `get` accessor, with the help of `toStringTag`, changes the default tag to `'Greater'` for an instance of `Greater`. It can be read
   * by the `typeOf()` function of `@angular-package/type`.
   * @returns The return value is the word 'Greater` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'Greater';
  }

  /**
   * Creates the `Greater` instance with the given `value`.
   * @param value The value of generic type variable `Value` to set with a new instance.
   * @angularpackage
   */
  constructor(value: Value) {
    super(value);
  }

  /**
   * Checks whether the primitive value of a specified ``object`` is greater than the given `value`.
   * @param value The value of `number` type to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is greater than the given value.
   * @angularpackage
   */
  public than(value: number): boolean {
    return typeof value === 'number' ? this.valueOf() > value : false;
  }

  /**
   * Checks whether the primitive value of a specified `object` is greater than every value of the given `values`.
   * @param values A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is greater than every value of the given `values`.
   * @angularpackage
   */
  public thanEvery(...values: number[]): boolean {
    return Array.isArray(values)
      ? values.every((value) => this.valueOf() > value)
      : false;
  }

  /**
   * Checks whether the primitive value of a specified `object` is greater than some given `values`.
   * @param values A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is greater than some given `values`.
   * @angularpackage
   */
  public thanSome(...values: number[]): boolean {
    return Array.isArray(values)
      ? values.some((value) => this.valueOf() > value)
      : false;
  }

  /**
   * Returns the primitive value of a specified `object`.
   * @returns The return value is the primitive value of generic type variable `Value`.
   * @angularpackage
   */
  public valueOf(): Value {
    return super.valueOf() as any;
  }
}
