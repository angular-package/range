// Class.
import { Inequality } from './inequality.class';
/**
 * The `Maximum` primitive wrapper object extended by the `Inequality` abstract primitive wrapper `object` represents the maximum number
 * greater or less than the given.
 */
export class Maximum<Value extends number> extends Inequality<Value> {
  //#region instance public properties.
  /**
   * The `get` accessor, with the help of `toStringTag`, changes the default tag to `'Maximum'` for an instance of `Maximum`. It can be read
   * by the `typeOf()` function of `@angular-package/type`.
   */
  public get [Symbol.toStringTag](): string {
    return 'Maximum';
  }
  //#endregion instance public properties.

  //#region static public methods.
  /**
   * Defines the `Maximum` instance of the given primitive `value`.
   * @param value The maximum number of generic type variable `Max` to set with a new instance.
   * @returns The return value is the `Maximum` instance of the given `max`.
   * @angularpackage
   */
  public static define<Value extends number>(value: Value): Maximum<Value> {
    return new this(value);
  }

  /**
   * The static `isMaximum()` method checks the provided value of any type whether is an instance of `Maximum`.
   * @param value The value of any type to test against the `Maximum` instance.
   * @returns The return value is a `boolean` indicating whether the provided value is an instance of `Maximum`.
   * @angularpackage
   */
  public static isMaximum<Max extends number>(
    value: any,
    max?: Max
  ): value is Maximum<Max> {
    return (
      typeof value === 'object' &&
      value instanceof this &&
      (typeof max === 'number' ? value.valueOf() : true)
    );
  }
  //#endregion static methods.

  //#region constructor.
  /**
   * Creates the `Maximum` instance of the given primitive `value`.
   * @param value The value of the generic type variable `Value` is the primitive value of the new instance.
   * @angularpackage
   */
  constructor(value: Value) {
    super(value);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * The `valueOf()` method returns the primitive value of the generic type variable `Value` of the specified `Maximum` object.
   * @returns The return value is the `number` of the generic type variable `Value`.
   * @angularpackage
   */
  public valueOf(): Value {
    return super.valueOf() as Value;
  }
  //#endregion instance public methods.
}
