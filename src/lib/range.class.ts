// Class.
import { Maximum } from './maximum.class';
import { Minimum } from './minimum.class';
/**
 * The `Range` object represents a range between a minimum and maximum.
 */
export class Range<Min extends number, Max extends number> {
  //#region instance properties.
  /**
   * The `get` accessor obtains the maximum range from the private `#maximum` property.
   * @returns The return value is the maximum range of generic type variable `Max`.
   * @angularpackage
   */
  public get max(): Max {
    return this.#maximum.valueOf();
  }

  /**
   * The `get` accessor obtains minimum range from the private `#minimum` property.
   * @returns The return value is the minimum range of generic type variable `Min`.
   * @angularpackage
   */
  public get min(): Min {
    return this.#minimum.valueOf();
  }

  /**
   * The property, with the help of `toStringTag`, changes the default tag to `'Range'` for an instance of `Range`. It can be read by the
   * `typeOf()` function of `@angular-package/type`.
   * @returnsThe return value is the word 'Range` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'Range';
  }

  /**
   * Private property of the `Maximum` primitive wrapper `object` with a primitive value from a given `max` of the `Range` constructor
   * indicates the maximum range of the `number` type greater or less than the given.
   */
  #maximum: Maximum<Max>;

  /**
   * Private property of the `Minimum` primitive wrapper `object` with a primitive value from a given `min` of the `Range` constructor
   * indicates the minimum range of the `number` type greater or less than the given.
   */
  #minimum: Minimum<Min>;
  //#endregion instance properties.

  //#region static public methods.
  /**
   * The static `create()` method returns a new instance of `Range` with a range of the given `min` and `max`.
   * @param min The minimum range of generic type variable `Min` to set with a new `Range` instance.
   * @param max The maximum range of generic type variable `Max` to set with a new `Range` instance.
   * @returns The return value is the `Range` instance with a range of the given `min` and `max`.
   * @angularpackage
   */
  public static create<Min extends number, Max extends number>(
    min: Min,
    max: Max
  ): Range<Min, Max> {
    return new Range(min, max);
  }

  /**
   * The static `createMaximum()` method returns the `Maximum` instance of the given maximum `value`.
   * @param value The maximum range of a generic type variable `Value` to set with a new instance of `Maximum`.
   * @returns The return value is the `Maximum` instance with the primitive value from the given `value`.
   * @angularpackage
   */
  public static createMaximum<Value extends number>(
    value: Value
  ): Maximum<Value> {
    return Maximum.create(value);
  }

  /**
   * The static `createMinimum()` method returns the `Minimum` instance of the given minimum `value`.
   * @param value The minimum range of a generic type variable `Value` to set with a new instance of `Minimum`.
   * @returns The return value is the `Minimum` instance with the primitive value from the given `value`.
   * @angularpackage
   */
  public static createMinimum<Value extends number>(
    value: Value
  ): Minimum<Value> {
    return Minimum.create(value);
  }

  /**
   * The static `isRange()` method checks whether the `value` is an instance of `Range` of any or the given minimum and maximum range.
   * @param value The value of any type to test against the `Range` instance.
   * @param min The optional minimum range of generic type variable `Min` to check whether it's equal to a minimum of the given `value`.
   * @param max The optional maximum range of generic type variable `Max` to check whether it's equal to a maximum of the given `value`.
   * @returns The return value is a boolean indicating whether the provided `value` is an instance of `Range` of any or the given minimum
   * and maximum range.
   * @angularpackage
   */
  public static isRange<Min extends number, Max extends number>(
    value: any,
    min?: Min,
    max?: Max
  ): value is Range<Min, Max> {
    return true;
    // return isInstance(value, Range, callback);
  }
  //#endregion static public methods.

  //#region constructor.
  /**
   * Creates the `Range` instance with a range of the given `min` and `max`.
   * @param min The minimum range of generic type variable `Min` to set with a new `Range` instance.
   * @param max The maximum range of generic type variable `Max` to set with a new `Range` instance.
   * @returns The return value is a new instance of `Range` of the given minimum and maximum.
   * @angularpackage
   */
  constructor(min: Min, max: Max) {
    this.#maximum = new Maximum(max);
    this.#minimum = new Minimum(min);
    Object.defineProperties(this, {
      min: {
        value: min,
      },
      max: {
        value: max,
      },
    });
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * Checks whether the value is in the range of a specified `Range` object.
   * @param value The value of number type to test.
   * @returns The return value is a `boolean` indicating whether the given `value` is in the range of a specified `Range` object.
   * @angularpackage
   */
  public has(value: number): boolean {
    return this.minLessThan(value) && this.maxGreaterThan(value);
  }

  /**
   * Checks whether every value of the given `values` is in the range of a specified `Range` object.
   * @param value A rest parameter of numbers to test.
   * @returns The return value is a `boolean` indicating whether every value of the given `values` is in the range of a specified `Range`
   * object.
   * @angularpackage
   */
  public hasEvery(...values: number[]): boolean {
    return values.every((value) => this.has(value));
  }

  /**
   * Checks whether some `values` are in the range of a specified `Range` object.
   * @param value A rest parameter of numbers to test.
   * @returns The return value is a `boolean` indicating whether some `values` are in the range of a specified `Range` object.
   * @angularpackage
   */
  public hasSome(...values: number[]): boolean {
    return values.some((value) => this.has(value));
  }

  /**
   * Checks whether the range of a specified `Range` object is between a range of the given `min` and `max`.
   * @param min The minimum range of number type to test.
   * @param max The maximum range of number type to test.
   * @returns The return value is a `boolean` type indicating whether the range of a specified `Range` object is between a range of the
   * given `min` and `max`.
   * @angularpackage
   */
  public isBetween(min: number, max: number): boolean {
    return this.minLessThan(min) && this.maxGreaterThan(max);
  }

  /**
   * Checks whether the range of a specified `Range` object is between every range of the given `ranges`.
   * @param ranges A rest parameter of array type ranges to test.
   * @returns The return value is a `boolean` type indicating whether the range of a specified `Range` object is between every range of the
   * given `ranges`.
   * @angularpackage
   */
  public isBetweenEvery(...ranges: [number, number][]): boolean {
    return ranges.every((range) => this.hasEvery(...range));
  }

  /**
   * Checks whether the range of a specified `Range` object is between some given `ranges`.
   * @param ranges A rest parameter of array type ranges to test.
   * @returns The return value is a `boolean` type indicating whether the range of a specified `Range` object is between every range of the
   * given `ranges`.
   * @angularpackage
   */
  public isBetweenSome(...ranges: [number, number][]): boolean {
    return ranges.some((range) => this.hasEvery(...range));
  }

  /**
   * The `getMax()` method gets the maximum range of a specified `Range` object.
   * @returns The return value is the maximum range of a generic type variable `Max`.
   * @angularpackage
   */
  public getMax(): Max {
    return this.#maximum.valueOf();
  }

  /**
   * The `getMin()` method gets the minimum range of a specified `Range` object.
   * @returns The return value is the minimum range of a generic type variable `Min`.
   * @angularpackage
   */
  public getMin(): Min {
    return this.#minimum.valueOf();
  }

  /**
   * The `maxGreaterThan()` method checks whether the value is less than the maximum range of a specified `Range` object.
   * @param value The value of number type to test.
   * @returns The return value is a `boolean` type indicating whether the given `value` is less than maximum range of a specified `Range` object.
   * @angularpackage
   */
  public maxGreaterThan(value: number): boolean {
    return this.#maximum.greaterThan(value);
  }

  /**
   * The `maxLessThan()` method checks whether the value is greater than the maximum range of a specified `Range` object.
   * @param value The value of number type to test.
   * @returns The return value is a `boolean` type indicating whether the given `value` is greater than maximum range of a specified `Range` object.
   * @angularpackage
   */
  public maxLessThan(value: number): boolean {
    return this.#maximum.lessThan(value);
  }

  /**
   * The `minGreaterThan()` method checks whether the value is less than a minimum range of a specified `Range` object.
   * @param value The value of number type to test.
   * @returns The return value is a `boolean` type indicating whether the given `value` is less than minimum range of a specified `Range` object.
   * @angularpackage
   */
  public minGreaterThan(value: number): boolean {
    return this.#minimum.greaterThan(value);
  }

  /**
   * The method `minLessThan()` checks whether the value is greater than the minimum range of a specified `Range` object.
   * @param value The value of number type to test.
   * @returns The return value is a `boolean` type indicating whether the given `value` is greater than minimum range of a specified `Range` object.
   * @angularpackage
   */
  public minLessThan(value: number): boolean {
    return this.#minimum.lessThan(value);
  }

  /**
   * The `toArray()` method returns a read-only array of the range in order minimum and maximum.
   * @returns The return value is a read-only array of the range in order minimum and maximum.
   * @angularpackage
   */
  public toArray(): readonly [Min, Max] {
    return [this.#minimum.valueOf(), this.#maximum.valueOf()];
  }

  /**
   * The `valueOf()` method returns a read-only object consisting of the primitive values of `Minimum` and `Maximum` instances.
   * @returns The return value is a frozen `object` consisting of the primitive values of `Minimum` and `Maximum` instances.
   * @angularpackage
   */
  public valueOf(): Readonly<{ min: Min; max: Max }> {
    return Object.freeze({
      min: this.#minimum.valueOf(),
      max: this.#maximum.valueOf(),
    });
  }
  //#endregion instance public methods.
}
