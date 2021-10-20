import {
  // Type.
  MinMax,
  ResultCallback,
  // Function.
  guardObjectSomeKeys,
  isDefined,
  isInstance,
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
   * Gets a `MinMax` interface `object` consisting of the primitive values of  `Minimum` and/or `Maximum` instances from the `Range`
   * instance if set otherwise returns an empty `object`.
   */
  public static get get(): MinMax<any, any> {
    return this.#range?.get;
  }

  /**
   * Gets the primitive value of the `Maximum` instance from the `Range` instance if set otherwise returns `undefined`.
   */
  public static get max(): number | undefined {
    return this.#range?.get?.max;
  }

  /**
   * Gets the primitive value of the `Minimum` instance from the `Range` instance if set otherwise returns `undefined`.
   */
  public static get min(): number | undefined {
    return this.#range?.get?.min;
  }

  /**
   * The static `set` property sets a new instance of `Range` from the assigned value of the `MinMax` object and the stored primitive values
   * from the `Minimum` and a `Maximum` instances of static `Range`.
   */
  public static set set(minmax: MinMax<any, any>) {
    this.setRange(minmax);
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
   * The static, private (independent) property returns an instance of `Range` if set otherwise returns undefined.
   */
  static #range: Range<any, any>;
  //#endregion static private properties.
  //#endregion static properties.

  //#region instance properties.
  /**
   * Gets a `MinMax` interface `object` consisting of the primitive values of `Minimum` and/or `Maximum` instances if set otherwise returns
   * an empty `object`.
   */
  public get get(): MinMax<Min, Max> {
    return this.#minmax;
  }

  /**
   * The `max` property of generic type variable `Max` returns the primitive value of the `Maximum` instance if set otherwise returns
   * `undefined`.
   */
  public get max(): Max | undefined {
    return this.#maximum?.get;
  }

  /**
   * The `min` property of generic type variable `Min` returns the primitive value of the `Minimum` instance if set otherwise returns
   * `undefined`.
   */
  public get min(): Min | undefined {
    return this.#minimum?.get;
  }

  /**
   * The property, with the help of `toStringTag`, changes the default tag to `'range'` for an instance of `Range`. It can be read by the
   * `typeOf()` function of `@angular-package/type`.
   */
  get [Symbol.toStringTag](): string {
    return 'range';
  }

  /**
   * The private (independent) property returns a `MinMax` interface `object` consisting of the primitive values of `Minimum` and/or
   * `Maximum` instances if set otherwise returns an empty `object`.
   */
  get #minmax(): MinMax<any, any> {
    return {
      ...(this.#maximum?.get && { max: this.#maximum.get }),
      ...(this.#minimum?.get && { min: this.#minimum.get }),
    };
  }

  /**
   * The private (independent) property returns an instance of `Maximum`.
   */
  #maximum!: Maximum<Max>;

  /**
   * The private (independent) property returns an instance of `Minimum`.
   */
  #minimum!: Minimum<Min>;
  //#endregion instance properties.

  //#region static public methods.
  /**
   * The static `defineMaximum()` method returns a new instance of `Maximum` with the provided `max`.
   * @param max The maximum range of a generic type variable `Max` to create a new instance of `Maximum`.
   * @param callback An optional callback `function` of the `ResultCallback` type to handle the check whether the provided `max` is a
   * `number` type.
   * @returns The return value is the `Maximum` instance of the primitive value from the provided `max`.
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
   * @returns The return value is the `Minimum` instance of the primitive value from the provided `min`.
   * @angularpackage
   */
  public static defineMinimum<Min extends number>(
    min: Min,
    callback?: ResultCallback<Min>
  ): Minimum<Min> {
    return new Minimum(min, callback);
  }

  /**
   * The static `defineRange()` method returns a new instance of `Range` with the provided `minmax`.
   * @param minmax The object of the `MinMax` interface to create a new instance of `Range`.
   * @param callback An optional callback `function` of the `ResultCallback` type to handle the result of the check whether the provided
   * `minmax` is an `object` that contains `min` or `max` property.
   * @returns The return value is a new instance of `Range`.
   * @angularpackage
   */
  public static defineRange<Min extends number, Max extends number>(
    minmax: MinMax<Min, Max>,
    callback?: ResultCallback<MinMax<Min, Max>>
  ): Range<Min, Max> {
    return new Range(minmax, callback);
  }

  /**
   * The static `getMax()` method gets the primitive value of the `Maximum` instance from the `Range` instance if set otherwise returns
   * `undefined`.
   * @returns The return value is a maximum value of the range of a generic type variable `Max` or `undefined`.
   * @angularpackage
   */
  public static getMax<Max extends number>(): Max | undefined {
    return this.#range?.getMax();
  }

  /**
   * The static `getMaximum()` method gets an instance of `Maximum` from the `Range` instance if set otherwise returns `undefined`.
   * @returns The return value is an instance of `Maximum` or `undefined`.
   * @angularpackage
   */
  public static getMaximum<Max extends number>(): Maximum<Max> | undefined {
    return this.#range?.getMaximum();
  }

  /**
   * The static `getMin()` method gets the primitive value of the `Minimum` instance from the `Range` instance if set otherwise returns
   * `undefined`.
   * @returns The return value is a minimum value of the range of a generic type variable `Min` or `undefined`.
   * @angularpackage
   */
  public static getMin<Min extends number>(): Min | undefined {
    return this.#range?.getMin();
  }

  /**
   * The static `getMinimum()` method gets an instance of `Minimum` from the `Range` instance if set otherwise returns `undefined`.
   * @returns The return value is an instance of `Minimum` or `undefined`.
   * @angularpackage
   */
  public static getMinimum<Min extends number>(): Minimum<Min> | undefined {
    return this.#range?.getMinimum();
  }

  /**
   * The static `getRange()` method gets an instance of `Range` if set otherwise returns `undefined`.
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
   * The static `isRange()` method returns the result of the check whether the provided `value` is an instance of `Range`.
   * @param value The value of any type to test against the `Range` instance.
   * @param callback An optional callback function of the `ResultCallback` type to handle the result of the check whether the provided
   * `value` is an instance of `Range`.
   * @returns The return value is a boolean indicating whether the provided `value` is an instance of `Range`.
   */
  public static isRange<Min extends number, Max extends number>(
    value: any,
    callback?: ResultCallback<any>
  ): value is Range<Min, Max> {
    return isInstance(value, Range, callback);
  }

  /**
   * The static `setMaximum()` method sets the `Maximum` instance with the provided `maximum`.
   * @param max The maximum range of a generic type variable `Max` to create a new instance of `Maximum`.
   * @param callback An optional callback `function` of the `ResultCallback` type to handle the result of the check whether the provided
   * `max` is a `number` type.
   * @returns The return value is a static `Range`.
   * @angularpackage
   */
  public static setMaximum<Max extends number>(
    max: Max,
    callback?: ResultCallback<Max>
  ): typeof Range {
    this.setRange({ max }, callback as any);
    return this;
  }

  /**
   * The static `setMinimum()` method sets the `Minimum` instance with the provided `minimum`.
   * @param min The minimum range of a generic type variable `Min` to create a new instance of `Minimum`.
   * @param callback An optional callback `function` of the `ResultCallback` type to handle the result of the check whether the provided
   * `min` is a `number` type.
   * @returns The return value is a static `Range`.
   * @angularpackage
   */
  public static setMinimum<Min extends number>(
    min: Min,
    callback?: ResultCallback<Min>
  ): typeof Range {
    this.setRange({ min }, callback as any);
    return this;
  }

  /**
   * The static `setRange()` method sets a new instance of `Range` with the provided `MinMax` parameter and the stored primitive values from
   * the `Minimum` and a `Maximum` instances of static `Range`.
   * @param minmax The object of `MinMax` interface to create a new instance of `Range`, by default its value is picked from stored
   * `Minimum` and `Maximum` of static `Range`.
   * @param callback An optional callback function of the `ResultCallback` type to handle the result of the check whether the provided
   * `minmax` is an object that contains `min` or `max` property.
   * @returns The return value is a static `Range`.
   * @angularpackage
   */
  public static setRange<Min extends number, Max extends number>(
    minmax: MinMax<Min, Max> = {},
    callback?: ResultCallback<MinMax<Min, Max>>
  ): typeof Range {
    this.#range = new Range(
      {
        ...{
          max: this.#range?.max,
          min: this.#range?.min,
        },
        ...minmax,
      },
      callback
    );
    return this;
  }
  //#endregion static public methods.

  //#region constructor.
  /**
   * Creates a new instance of `Range`.
   * @param range The required `MinMax` object of optional `min` and `max` properties to create a new instance.
   * @param callback An optional callback function of the `ResultCallback` type to handle the check whether the provided `range` is an
   * object that contains `min` or `max` properties.
   * @returns The return value is a new instance of `Range`.
   * @angularpackage
   */
  constructor(
    range: MinMax<Min, Max>,
    callback?: ResultCallback<MinMax<Min, Max>>
  ) {
    guardObjectSomeKeys(range, ['max', 'min'], callback) &&
      (isDefined(range.max) &&
        (this.#maximum = new Maximum<Max>(range?.max as Max)),
      isDefined(range.min) &&
        (this.#minimum = new Minimum<Min>(range?.min as Min)));
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * Gets the primitive value of the `Maximum` instance from the `Range` instance if set otherwise returns `undefined`.
   * @returns The return value is the primitive maximum value of the `Range` of a generic type variable `Max` or `undefined`.
   * @angularpackage
   */
  public getMax(): Max | undefined {
    return this.#maximum?.get;
  }

  /**
   * Gets the `Maximum` instance from the `Range` instance if set otherwise returns `undefined`.
   * @returns The return value is an instance of `Maximum` or `undefined`.
   * @angularpackage
   */
  public getMaximum(): Maximum<Max> | undefined {
    return this.#maximum;
  }

  /**
   * Gets the primitive value of the `Minimum` instance from the `Range` instance if set otherwise returns `undefined`.
   * @returns The return value is the primitive minimum value of the range of a generic type variable `Min` or `undefined`.
   * @angularpackage
   */
  public getMin(): Min | undefined {
    return this.#minimum?.get;
  }

  /**
   * Gets the `Minimum` instance from the `Range` instance if set otherwise returns `undefined`.
   * @returns The return value is an instance of `Minimum` or `undefined`.
   * @angularpackage
   */
  public getMinimum(): Minimum<Min> | undefined {
    return this.#minimum;
  }

  /**
   * The `valueOf()` method returns the `MinMax` interface object consisting of the primitive values of `Minimum` and/or `Maximum` instances
   * if set or an empty `object`.
   * @returns The return value is an `object` that consists of the primitive values of `Minimum` and/or `Maximum` instances or an empty
   * `object`.
   * @angularpackage
   */
  public valueOf(): MinMax<Min, Max> {
    return this.#minmax;
  }
  //#endregion instance public methods.
}
