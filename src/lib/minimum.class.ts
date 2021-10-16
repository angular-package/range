import {
  // Type.
  ResultCallback,
  // Function.
  guardNumber,
} from '@angular-package/type';
/**
 * The `Minimum` primitive wrapper object represents the minimum `number`.
 */
export class Minimum<Min extends number> extends Number {
  //#region static properties.
  //#region static public properties.
  /**
   * The static property `get` of `number` returns the primitive value of an instance of `Minimum` if set otherwise returns `undefined`.
   */
  public static get get(): number {
    return this.#minimum?.valueOf();
  }

  /**
   * The static property `set` of number type sets a new instance of `Minimum` with its provided value that can be got by the `get`, `value`
   * static properties, or static `getMinimum()` method.
   */
  public static set set(minimum: number) {
    this.value = minimum;
  }

  /**
   * The static property `value` of `number` type sets a new instance of `Minimum` with its provided value that can be got by itself and the
   * `get` static property, or static `getMinimum()` method.
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
   */
  public static getMinimum<Max extends number>(): Minimum<Max> {
    return this.#minimum;
  }

  /**
   * The static `setMinimum()` method sets a new instance of `Minimum` with the provided `minimum`.
   * @param minimum The minimum value of the `number` type to set a new instance.
   * @param callback An optional callback function of `ResultCallback` type to handle the result of the check whether the provided `minimum`
   * is a `number` type.
   * @returns The return value is static `Minimum`.
   */
  public static setMinimum(
    minimum: number,
    callback?: ResultCallback<number>
  ): typeof Minimum {
    guardNumber(minimum, callback) && (this.#minimum = new Minimum(minimum));
    return this;
  }
  //#endregion static methods.

  //#region constructor.
  /**
   * Creates a new instance of `Minimum`.
   * @param maximum The required immutable minimum of `number` type to set. The value can be picked by property `get` or `valueOf()` method.
   */
  constructor(minimum: Min, callback?: ResultCallback<Min>) {
    super((guardNumber(minimum) && minimum) || undefined);
  }
  //#endregion constructor.

  /**
   * The `valueOf()` method returns the primitive value of the generic type variable `Min` of the specified `Minimum` object.
   * @returns The return value is `number` of generic type variable `Min`.
   */
  public valueOf(): Min {
    return super.valueOf() as Min;
  }
}
