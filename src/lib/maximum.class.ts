import {
  // Type.
  ResultCallback,
  // Function.
  guardNumber,
} from '@angular-package/type';
/**
 * The `Maximum` primitive wrapper object represents the maximum `number`.
 */
export class Maximum<Max extends number> extends Number {
  //#region static properties.
  //#region static public properties.
  /**
   * The static property `get` of `number` returns the primitive value of the `Maximum` instance if set otherwise returns `undefined`.
   */
  public static get get(): number {
    return this.#maximum?.valueOf();
  }

  /**
   * The static property `set` of number type sets a new instance of `Maximum` with its provided value that can be got by the `get`, `value`
   * static properties, or static `getMaximum()` method.
   */
  public static set set(maximum: number) {
    this.value = maximum;
  }

  /**
   * The static property `value` of `number` type sets a new instance of `Maximum` with its provided value that can be got by itself and the
   * `get` static property, or static `getMaximum()` method.
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
   */
  public static getMaximum<Max extends number>(): Maximum<Max> {
    return this.#maximum;
  }

  /**
   * The static `setMaximum()` method sets a new instance of `Maximum` with the provided `maximum`.
   * @param maximum The maximum value of the `number` type to set a new instance.
   * @param callback An optional callback `function` of the `ResultCallback` type to handle the result of the check whether the provided
   * `maximum` is a `number` type.
   * @returns The return value is static `Maximum`.
   */
  public static setMaximum(
    maximum: number,
    callback?: ResultCallback<number>
  ): typeof Maximum {
    guardNumber(maximum, callback) && (this.#maximum = new Maximum(maximum));
    return this;
  }
  //#endregion static methods.

  //#region constructor.
  /**
   * Creates a new instance of `Maximum`.
   * @param maximum The required immutable maximum of `number` type to set. The value can be picked by property `get` or `valueOf()` method.
   */
  constructor(maximum: Max) {
    super((guardNumber(maximum) && maximum) || undefined);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * The `valueOf()` method returns the primitive value of the generic type variable `Max` of the specified `Maximum` object.
   * @returns The return value is `number` of generic type variable `Max`.
   */
  public valueOf(): Max {
    return super.valueOf() as Max;
  }
  //#endregion instance public methods.
}
