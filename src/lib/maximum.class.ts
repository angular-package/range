import {
  // Type.
  ResultCallback,
  // Function.
  guardNumber,
  isInstance,
} from '@angular-package/type';
/**
 * The `Maximum` primitive wrapper object represents the maximum `number`.
 */
export class Maximum<Max extends number> extends Number {
  //#region static properties.
  //#region static public properties.
  /**
   * The static `get` property of `number` type returns the primitive value of the `Maximum` instance if set otherwise returns `undefined`.
   */
  public static get get(): number {
    return this.#maximum?.valueOf();
  }

  /**
   * The static `set` property of the `number` type sets a new instance of `Maximum` with its provided value. The set value can be got by
   * the static `get` and `value` properties, or the static `getMaximum()` method.
   */
  public static set set(maximum: number) {
    this.value = maximum;
  }

  /**
   * The static `value` property of the `number` type sets a new instance of `Maximum` with its provided value and returns the primitive
   * value of `Maximum` instance if set, otherwise returns `undefined`.
   */
  public static get value(): number {
    return this.#maximum?.valueOf();
  }
  public static set value(maximum: number) {
    guardNumber(maximum) && (this.#maximum = new Maximum(maximum));
  }

  /**
   * The property, with the help of `toStringTag`, changes the default tag to `'maximum'` for static `Maximum`. It can be read by the
   * `typeOf()` function of `@angular-package/type`.
   */
  static get [Symbol.toStringTag](): string {
    return 'maximum';
  }
  //#endregion static public properties.

  /**
   * The static, private (independent) property stores an instance of `Maximum`.
   */
  static #maximum: Maximum<any>;
  //#endregion static properties.

  //#region instance properties.
  /**
   * The property `get` returns the primitive value of the generic type variable `Max` of the `Maximum` instance.
   */
  public get get(): Max {
    return super.valueOf() as Max;
  }

  /**
   * The property, with the help of `toStringTag`, changes the default tag to `'maximum'` for an instance of `Maximum`. It can be read by
   * the `typeOf()` function of `@angular-package/type`.
   */
  public get [Symbol.toStringTag](): string {
    return 'maximum';
  }
  //#endregion instance properties.

  //#region static methods.
  /**
   * The static `getMaximum()` method returns an instance of `Maximum` if set otherwise returns `undefined`.
   * @returns The return value is an instance of `Maximum` if set otherwise returns `undefined`.
   * @angularpackage
   */
  public static getMaximum<Max extends number>(): Maximum<Max> {
    return this.#maximum;
  }

  /**
   * The static `isMaximum()` method checks the provided value of any type whether is an instance of `Maximum`.
   * @param value The value of any type to test against the `Maximum` instance.
   * @param callback An optional callback function of the `ResultCallback` type to handle the result of the check whether the provided value
   * is an instance of `Maximum`.
   * @returns The return value is a `boolean` indicating whether the provided value is an instance of `Maximum`.
   */
  public static isMaximum<Max extends number>(
    value: any,
    callback?: ResultCallback<any>
  ): value is Maximum<Max> {
    return isInstance(value, Maximum, callback);
  }

  /**
   * The static `setMaximum()` method sets a new instance of `Maximum` with the provided `maximum`.
   * @param maximum The maximum value of the generic type variable `Max` to set a new instance of `Maximum`.
   * @param callback An optional callback `function` of the `ResultCallback` type to handle the result of the check whether the provided
   * `maximum` is a `number` type.
   * @returns The return value is static `Maximum`.
   * @angularpackage
   */
  public static setMaximum<Max extends number>(
    maximum: Max,
    callback?: ResultCallback<Max>
  ): typeof Maximum {
    guardNumber(maximum, callback) && (this.#maximum = new Maximum(maximum));
    return this;
  }
  //#endregion static methods.

  //#region constructor.
  /**
   * Creates a new instance of `Maximum`.
   * @param maximum The immutable maximum value of generic type variable `Max` of the `Maximum` instance being created. Its default
   * value can be set by the static `set` and `value` properties, or static `setMaximum()` method and can be picked by property `get` or
   * `valueOf()` method of an `Maximum` instance.
   * @param callback An optional callback function of the `ResultCallback` type to handle the result of the check whether the provided
   * `maximum` is a `number` type.
   * @angularpackage
   */
  constructor(
    maximum: Max = Maximum.#maximum?.get,
    callback?: ResultCallback<Max>
  ) {
    super((guardNumber(maximum, callback) && maximum) || 0);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * The `valueOf()` method returns the primitive value of the generic type variable `Max` of the specified `Maximum` object.
   * @returns The return value is the `number` of the generic type variable `Max`.
   * @angularpackage
   */
  public valueOf(): Max {
    return super.valueOf() as Max;
  }
  //#endregion instance public methods.
}
