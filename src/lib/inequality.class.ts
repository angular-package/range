// Class.
import { Greater } from './greater.class';
import { Less } from './less.class';
/**
 * The `Inequality` abstract primitive wrapper `object` represents the primitive value greater or less than the given.
 */
export abstract class Inequality<Value extends number> extends Number {
  //#region instance public properties.
  /**
   * The `get` accessor obtains the `Greater` instance of given `value` by returning the `#greater` property.
   * @returns The return value is the `Greater` instance of the given `value` in the constructor.
   * @angularpackage
   */
  public get greater(): Greater<Value> {
    return this.#greater;
  }

  /**
   * The `get` accessor obtains the `Less` instance of given `value` by returning the `#less` property.
   * @returns The return value is the `Less` instance of the given `value` in the constructor.
   * @angularpackage
   */
  public get less(): Less<Value> {
    return this.#less;
  }
  //#endregion instance public properties.

  //#region instance private properties.
  /**
   * Private property of the `Greater` primitive wrapper `object` indicates the value of the `number` type greater than the given.
   */
  #greater: Greater<Value>;

  /**
   * Private property of the `Less` primitive wrapper `object` indicates the value of `number` type less than the given.
   */
  #less: Less<Value>;
  //#endregion instance private properties.

  //#region constructor.
  /**
   * Creates a child class instance with the given primitive `value`.
   * @param value The value of the generic type variable `Value` is the primitive value of a new child instance.
   * @angularpackage
   */
  constructor(value: Value) {
    super(value);
    this.#greater = new Greater(value);
    this.#less = new Less(value);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * Checks whether the primitive value of a child instance is greater than the given `value`.
   * @param value The value of `number` type to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is greater than the given `value`.
   * @angularpackage
   */
  public greaterThan(value: number): boolean {
    return this.#greater.than(value);
  }

  /**
   * Checks whether the primitive value of a child instance is greater than every value of the given `values`.
   * @param value A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is greater than every value of the given `values`.
   * @angularpackage
   */
  public greaterThanEvery(...values: number[]): boolean {
    return this.#greater.thanEvery(...values);
  }

  /**
   * Checks whether the primitive value of a child instance is greater than some given `values`.
   * @param value A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is greater than some given `values`.
   * @angularpackage
   */
  public greaterThanSome(...value: number[]): boolean {
    return this.#greater.thanSome(...value);
  }

  /**
   * Checks whether the primitive value of a child instance is less than the given `value`.
   * @param value The value of `number` type to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is less than the given `value`.
   * @angularpackage
   */
  public lessThan(value: number): boolean {
    return this.#less.than(value);
  }

  /**
   * Checks whether the primitive value of a child instance is less than every given value.
   * @param values A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is less than every value of the given `values`.
   * @angularpackage
   */
  public lessThanEvery(...values: number[]): boolean {
    return this.#less.thanEvery(...values);
  }

  /**
   * Checks whether the primitive value of a child instance is less than some given `values`.
   * @param values A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is less than some given `values`.
   * @angularpackage
   */
  public lessThanSome(...values: number[]): boolean {
    return this.#less.thanSome(...values);
  }
  //#endregion instance public methods.
}
