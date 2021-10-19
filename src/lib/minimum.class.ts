import {
  // Type.
  ResultCallback,
  // Function.
  guardNumber,
  isInstance,
} from '@angular-package/type';
/**
 * The `Minimum` primitive wrapper object represents the minimum `number`.
 */
export class Minimum<Min extends number> extends Number {
  //#region static properties.
  //#region static public properties.
  /**
   * The static `get` property of `number` type returns the primitive value of the `Minimum` instance if set otherwise returns `undefined`.
   */
  public static get get(): number {
    return this.#minimum?.valueOf();
  }

  /**
   * The static `set` property of the `number` type sets a new instance of `Minimum` with its provided value. The set value can be got by
   * the static `get` and `value` properties, or the static `getMinimum()` method.
   */
  public static set set(minimum: number) {
    this.value = minimum;
  }

  /**
   * The static `value` property of the `number` type sets a new instance of `Minimum` with its provided value and returns the primitive
   * value of `Minimum` instance if set, otherwise returns `undefined`.
   */
  public static get value(): number {
    return this.#minimum?.valueOf();
  }
  public static set value(minimum: number) {
    guardNumber(minimum) && (this.#minimum = new Minimum(minimum));
  }

  /**
   * The property, with the help of `toStringTag`, changes the default tag to `'minimum'` for static `Minimum`.
   */
  static get [Symbol.toStringTag](): string {
    return 'minimum';
  }
  //#endregion static public properties.

  /**
   * The static private property stores an instance of `Minimum`.
   */
  static #minimum: Minimum<any>;
  //#endregion static properties.

  //#region instance properties.
  /**
   * The property `get` returns the primitive value of the generic type variable `Min` of the `Minimum` instance.
   */
  public get get(): Min {
    return super.valueOf() as Min;
  }

  /**
   * The property, with the help of `toStringTag`, changes the default tag to `'minimum'` for an instance of `Minimum`. It can be read by
   * the `typeOf()` function of `@angular-package/type`.
   */
  public get [Symbol.toStringTag](): string {
    return 'minimum';
  }
  //#endregion instance properties.

  //#region static methods.
  /**
   * The static `getMinimum()` method returns an instance of `Minimum` if set otherwise returns undefined.
   * @returns The return value is an instance of `Minimum` if set otherwise undefined.
   * @angularpackage
   */
  public static getMinimum<Min extends number>(): Minimum<Min> {
    return this.#minimum;
  }

  /**
   * The static `isMinimum()` method checks the provided `value` of any type whether is an instance of `Minimum`.
   * @param value The value of any type to test against the `Minimum` instance.
   * @param callback An optional callback function of the `ResultCallback` type to handle the result of the check whether the provided
   * `value` is an instance of `Minimum`.
   * @returns The return value is a `boolean` indicating whether the provided `value` is an instance of `Minimum`.
   */
  public static isMinimum<Min extends number>(
    value: any,
    callback?: ResultCallback<any>
  ): value is Minimum<Min> {
    return isInstance(value, Minimum, callback);
  }

  /**
   * The static `setMinimum()` method sets a new instance of `Minimum` with the provided `minimum`.
   * @param minimum The minimum value of the generic type variable `Min` to set a new instance of `Minimum`.
   * @param callback An optional callback `function` of the `ResultCallback` type to handle the result of the check whether the provided
   * `minimum` is a `number` type.
   * @returns The return value is static `Minimum`.
   * @angularpackage
   */
  public static setMinimum<Min extends number>(
    minimum: Min,
    callback?: ResultCallback<Min>
  ): typeof Minimum {
    guardNumber(minimum, callback) && (this.#minimum = new Minimum(minimum));
    return this;
  }
  //#endregion static methods.

  //#region constructor.
  /**
   * Creates a new instance of `Minimum`.
   * @param minimum The immutable minimum value of generic type variable `Min` of the `Minimum` instance being created. Its default
   * value can be set by the static `set` and `value` properties, or static `setMinimum()` method and can be picked by property `get` or
   * `valueOf()` method of an `Minimum` instance.
   * @param callback An optional callback function of the `ResultCallback` type to handle the result of the check whether the provided
   * `minimum` is a `number` type.
   * @angularpackage
   */
  constructor(
    minimum: Min = Minimum.#minimum?.get,
    callback?: ResultCallback<Min>
  ) {
    super((guardNumber(minimum, callback) && minimum) || 0);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * The `valueOf()` method returns the primitive value of the generic type variable `Min` of the specified `Minimum` object.
   * @returns The return value is the `number` of the generic type variable `Min`.
   * @angularpackage
   */
  public valueOf(): Min {
    return super.valueOf() as Min;
  }
  //#endregion instance public methods.
}
