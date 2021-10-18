import {
  // Type.
  MinMax,
  ResultCallback,
  // Function.
  guardObjectSomeKeys,
} from '@angular-package/type';
// Class.
import { Maximum } from './maximum.class';
import { Minimum } from './minimum.class';
/**
 * The `Range` object represents a range between a number of minimum and maximum.
 */
export class Range<Min extends number, Max extends number> {
  //#region static properties.
  //#region static public properties.
  /**
   * The static `get` property returns an `object` of the `MinMax` interface consists of the primitive values of `Minimum` and/or `Maximum`
   * instances if set otherwise returns an empty `object`.
   */
  public static get get(): MinMax<any, any> {
    return this.#range?.get;
  }

  /**
   * The static `set` property sets a new instance of `Range` from the assigned `object` value of the `MinMax` interface.
   */
  public static set set(minmax: MinMax<any, any>) {
    this.#range = new Range(minmax);
  }

  /**
   * The static `value` property of the `MinMax` interface sets a new instance of `Range` from the assigned value and returns an `object` of
   * the `MinMax` interface consists of the primitive values of `Minimum` and/or `Maximum` instances, from an instance of `Range` if set
   * otherwise returns undefined.
   */
  public static get value(): MinMax<any, any> {
    return this.#range?.valueOf();
  }
  public static set value(minmax: MinMax<any, any>) {
    this.set = minmax;
  }
  //#endregion static public properties.

  /**
   * The static property, with the help of `toStringTag`, changes the default tag to `'range'` for static `Range`.
   */
  public static get [Symbol.toStringTag](): string {
    return 'range';
  }

  //#region private static properties.
  /**
   * The static, private (independent) property returns an instance of `Maximum` if set otherwise returns undefined.
   */
  static #maximum: Maximum<any>;

  /**
   * The static, private (independent) property returns an instance of `Minimum` if set otherwise returns undefined.
   */
  static #minimum: Minimum<any>;

  /**
   * The static, private (independent) property returns an instance of `Range` if set otherwise returns undefined.
   */
  static #range: Range<any, any>;
  //#endregion static private properties.
  //#endregion static properties.

  //#region instance properties.
  /**
   * The `get` property of the `MinMax` interface returns an `object` consists of the primitive values of `Minimum` and/or `Maximum`
   * instances if set otherwise returns an empty object.
   */
  public get get(): MinMax<Min, Max> {
    return this.#get;
  }

  /**
   * The `max` property of generic type variable `Max` returns the primitive value of the `Maximum` instance if set otherwise returns
   * `undefined`.
   */
  public get max(): Max {
    return this.#max?.get;
  }

  /**
   * The `min` property of generic type variable `Min` returns the primitive value of the `Maximum` instance if set otherwise returns
   * `undefined`.
   */
  public get min(): Min {
    return this.#min?.get;
  }

  /**
   * The property, with the help of `toStringTag`, changes the default tag to `'range'` for an instance of `Range`. It can be read by the
   * `typeOf()` function of `@angular-package/type`.
   */
  get [Symbol.toStringTag](): string {
    return 'range';
  }

  /**
   * The private (independent) property returns an `object` of the `MinMax` interface consists of the primitive values of `Minimum` and/or
   * `Maximum` instances if set otherwise returns an empty `object`.
   */
  get #get(): MinMax<any, any> {
    return {
      ...(this.#max?.get && { max: this.#max.get }),
      ...(this.#min?.get && { min: this.#min.get }),
    };
  }

  /**
   * The private (independent) property returns an instance of `Maximum`.
   */
  #max!: Maximum<Max>;

  /**
   * The private (independent) property returns an instance of `Minimum`.
   */
  #min!: Minimum<Min>;
  //#endregion instance properties.

  //#region static public methods.
  /**
   * The static `defineMaximum()` returns a new instance of `Maximum` with the provided `max`.
   * @param max The maximum range of a generic type variable `Max` to create a new instance of `Maximum`.
   * @param callback An optional callback function of the `ResultCallback` type to handle the check whether the provided `max` is a number
   * type.
   * @returns The return value is an instance of `Maximum` with the value of provided `max`.
   * @angularpackage
   */
  public static defineMaximum<Max extends number>(
    max: Max,
    callback?: ResultCallback<Max>
  ): Maximum<Max> {
    return new Maximum(max, callback);
  }

  /**
   * The static `defineMinimum()` method returns a new instance of `Minimum` with the provided `min`.
   * @param min The minimum range of a generic type variable `Min` to create a new instance of `Minimum`.
   * @param callback An optional callback `function` of the `ResultCallback` type to handle the check whether the provided `min` is a
   * `number` type.
   * @returns The return value is an instance of `Minimum` with the value of provided `min`.
   * @angularpackage
   */
  public static defineMinimum<Min extends number>(
    min: Min,
    callback?: ResultCallback<Min>
  ): Minimum<Min> {
    return new Minimum(min, callback);
  }

  /**
   * The static `defineRange()` method returns a new instance of `Range` with the provided `minmax` or stored minimum and a maximum of
   * static `Range`.
   * @param minmax The object of the `MinMax` interface to create a new instance of `Range`, by default its value is picked from stored
   * `minimum` and `maximum` of static `Range`.
   * @param callback An optional callback `function` of the `ResultCallback` type to handle the result of the check whether the provided
   * `minmax` is an `object` that contains `min` or `max` property.
   * @returns The return value is a new instance of `Range`.
   * @angularpackage
   */
  public static defineRange<Min extends number, Max extends number>(
    minmax: MinMax<Min, Max> = {
      max: this.#maximum?.get,
      min: this.#minimum?.get,
    },
    callback?: ResultCallback<MinMax<Min, Max>>
  ): Range<Min, Max> | undefined {
    return new Range(minmax, callback);
  }

  /**
   * The static `getMaximum()` method returns an instance of `Maximum` from the `Range` instance if set otherwise returns `undefined`.
   * @returns The return value is an instance of `Maximum` or `undefined`.
   * @angularpackage
   */
  public static getMaximum<Max extends number>(): Maximum<Max> {
    return this.#range?.getMaximum();
  }

  /**
   * The static `getMinimum()` method returns an instance of `Minimum` from the `Range` instance if set otherwise returns `undefined`.
   * @returns The return value is an instance of `Minimum` or `undefined`.
   * @angularpackage
   */
  public static getMinimum<Min extends number>(): Minimum<Min> {
    return this.#range?.getMinimum();
  }

  /**
   * The static `getRange()` method returns an instance of `Range` if set otherwise returns `undefined`.
   * @returns The return value is an instance of `Range` or `undefined`.
   * @angularpackage
   */
  public static getRange<Min extends number, Max extends number>(): Range<
    Min,
    Max
  > {
    return this.#range;
  }

  /**
   * The static `setMaximum()` method sets the `Maximum` instance with the provided `maximum`.
   * @param max The maximum range of a `number` type to create a new instance of `Maximum`.
   * @param callback An optional callback `function` of the `ResultCallback` type to handle the result of the check whether the provided
   * `max` is a `number` type.
   * @returns The return value is a static `Range`.
   * @angularpackage
   */
  public static setMaximum(
    max: number,
    callback?: ResultCallback<number>
  ): typeof Range {
    this.#maximum = new Maximum(max, callback);
    this.setRange();
    return this;
  }

  /**
   * The static `setMinimum()` method sets the `Minimum` instance with the provided `minimum`.
   * @param min The minimum range of a number type to create a new instance of `Minimum`.
   * @param callback An optional callback `function` of the `ResultCallback` type to handle the result of the check whether the provided
   * `min` is a `number` type.
   * @returns The return value is a static `Range`.
   * @angularpackage
   */
  public static setMinimum(
    min: number,
    callback?: ResultCallback<number>
  ): typeof Range {
    this.#minimum = new Minimum(min, callback);
    this.setRange();
    return this;
  }

  /**
   * The static `setRange()` method sets a new instance of `Range` with the provided `minmax` or stored minimum and a maximum of static
   * `Range`.
   * @param minmax The object of `MinMax` interface to create a new instance of `Range`, by default its value is picked from stored
   * `Minimum` and `Maximum` of static `Range`.
   * @param callback An optional callback function of the `ResultCallback` type to handle the result of the check whether the provided
   * `minmax` is an object that contains `min` or `max` property.
   * @returns The return value is a static `Range`.
   * @angularpackage
   */
  public static setRange<Min extends number, Max extends number>(
    minmax: MinMax<Min, Max> = {
      max: this.#maximum?.get,
      min: this.#minimum?.get,
    },
    callback?: ResultCallback<MinMax<Min, Max>>
  ): typeof Range {
    this.#range = new Range(minmax, callback);
    return this;
  }
  //#endregion static public methods.

  //#region constructor.
  /**
   * REVIEW:
   * Creates a new instance of `Range`.
   * @param range The required object of optional `min` and `max` properties.
   * @param callback An optional callback function of the `ResultCallback` type to handle the check whether the provided `range` is an
   * object that contains `min` or `max` properties.
   * @returns The return value is an instance of `Range`.
   * @angularpackage
   */
  constructor(
    range: MinMax<Min, Max> = {},
    callback?: ResultCallback<MinMax<Min, Max>>
  ) {
    guardObjectSomeKeys(range, ['max', 'min'], callback) &&
      ((this.#max = new Maximum<Max>(range?.max as Max)),
      (this.#min = new Minimum<Min>(range?.min as Min)));
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * The `getMax()` method returns the primitive value of the `Maximum` instance if set otherwise returns `undefined`.
   * @returns The return value is a maximum value of the range of a generic type variable `Max` or `undefined`.
   * @angularpackage
   */
  public getMax(): Max {
    return this.#max?.get;
  }

  /**
   * The `getMaximum()` method returns the `Maximum` instance if set otherwise returns `undefined`.
   * @returns The return value is an instance of `Maximum` or `undefined`.
   * @angularpackage
   */
  public getMaximum(): Maximum<Max> {
    return this.#max;
  }

  /**
   * The `getMin()` method returns the primitive value of the `Minimum` instance if set otherwise returns `undefined`.
   * @returns The return value is a minimum of the range of a generic type variable `Min` or `undefined`.
   * @angularpackage
   */
  public getMin(): Min {
    return this.#min.get;
  }

  /**
   * The `getMinimum()` method returns the `Minimum` instance if set otherwise returns `undefined`.
   * @returns The return value is an instance of `Minimum` or `undefined`.
   * @angularpackage
   */
  public getMinimum(): Minimum<Min> {
    return this.#min;
  }

  /**
   * The `valueOf()` method returns an `object` of the `MinMax` interface consists of the primitive values of `Minimum` and/or `Maximum`
   * instances if set or an empty `object`.
   * @returns The return value is an `object` consists of the primitive values of `Minimum` and/or `Maximum` instances or an empty `object`.
   * @angularpackage
   */
  public valueOf(): MinMax<Min, Max> {
    return this.#get;
  }
  //#endregion instance public methods.
}
