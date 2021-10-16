import {
  // Type.
  MinMax,
  // Function.
  guardObjectSomeKeys,
  isDefined,
} from '@angular-package/type';

// Class.
import { Maximum } from './maximum.class';
import { Minimum } from './minimum.class';
/**
 * The object represents a range between number of minimum and maximum.
 */
export class Range<Min extends number, Max extends number> {
  //#region static properties.
  //#region public static properties.
  public static get get(): MinMax<any, any> {
    return this.#range.valueOf();
  }

  public static set set(range: MinMax<any, any>) {
    this.#range = new Range(range);
  }

  public static get value(): MinMax<any, any> {
    return this.#range.valueOf();
  }

  public static set value(range: MinMax<any, any>) {
    this.set = range;
  }
  //#endregion public static properties.

  /**
   * The property, with the help of `toStringTag`, changes the default tag to `'range'` for static `Range`.
   */
  public static get [Symbol.toStringTag](): string {
    return 'range';
  }

  //#region private static properties.
  static #maximum: Maximum<any>;
  static #minimum: Minimum<any>;
  static #range: Range<any, any>;
  //#endregion private static properties.
  //#endregion static properties.

  //#region instance properties.
  /**
   * The property `get` returns the range.
   */
  get #get(): MinMax<any, any> {
    return {
      ...(this.#max?.get && { max: this.#max.get }),
      ...(this.#min?.get && { min: this.#min.get }),
    };
  }

  get [Symbol.toStringTag](): string {
    return 'range';
  }

  #max!: Maximum<Max>;
  #min!: Minimum<Min>;
  //#endregion instance properties.

  //#region public static methods.
  public static getRange<Min extends number, Max extends number>(): Range<
    Min,
    Max
  > {
    return this.#range;
  }

  public static setRange<Min extends number, Max extends number>(
    range: MinMax<Min, Max> = {
      max: this.#maximum.get,
      min: this.#minimum.get,
    }
  ): typeof Range {
    guardObjectSomeKeys(range, ['max', 'min']) && (this.set = range);
    return this;
  }

  public static getMaximum<Max extends number>(): Maximum<Max> {
    return this.#range?.getMaximum();
  }

  public static setMaximum(maximum: number): typeof Range {
    this.#maximum = new Minimum(maximum);
    return this;
  }

  public static getMinimum<Min extends number>(): Minimum<Min> {
    return this.#range?.getMinimum();
  }

  public static setMinimum(minimum: number): typeof Range {
    this.#minimum = new Minimum(minimum);
    return this;
  }
  //#endregion public static methods.

  //#region constructor.
  constructor(range: MinMax<Min, Max> = {}) {
    isDefined(range.max) && (this.#max = new Maximum(range.max));
    isDefined(range.min) && (this.#min = new Minimum(range.min));
  }
  //#endregion constructor.

  public getMaximum(): Maximum<Max> {
    return this.#max;
  }

  public getMinimum(): Minimum<Min> {
    return this.#min;
  }

  public valueOf(): MinMax<Min, Max> {
    return this.#get;
  }
}
