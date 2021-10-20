import { MinMax, isNumber, isUndefined } from '@angular-package/type';
import { TestingToBeMatchers } from '@angular-package/testing';

import { Range } from '../src/lib/range.class';
import { Maximum } from '../src/lib/maximum.class';
import { Minimum } from '../src/lib/minimum.class';

const toBe = new TestingToBeMatchers();

export const specRange = <Min extends number, Max extends number>(
  minmax: MinMax<Min, Max>,
  range?: Range<Min, Max>,
  consoleLog = false
) => {
  consoleLog && console.group(`new Range({ min: ${minmax.min}, max: ${minmax.max} })`);
  isUndefined(range) && (range = new Range(minmax));

  consoleLog && console.log(range);
  toBe.instance(range, Range).object(range);

  consoleLog && console.log(`.get: `, range.get);
  toBe
    .object(range.get)
    .objectKeys(range.get, ['max', 'min'])
    .number(range.get.max)
    .number(range.get.min)
    .numberBetween(range.get.max, range.get)
    .numberBetween(range.get.min, range.get);

  consoleLog && console.log(`.getMax(): `, range.getMax());
  toBe.number(range.getMax());

  consoleLog && console.log(`.getMaximum(): `, range.getMaximum());
  toBe
    .instance(range.getMaximum(), Maximum)
    .number(range.getMaximum()?.get)
    .number(range.getMaximum()?.valueOf());

  consoleLog && console.log(`.getMin(): `, range.getMin());
  toBe.number(range.getMin());

  consoleLog && console.log(`.getMinimum(): `, range.getMinimum());
  toBe
    .instance(range.getMinimum(), Minimum)
    .number(range.getMinimum()?.get)
    .number(range.getMinimum()?.valueOf());

  consoleLog && console.log(`.max: `, range.max);
  toBe.number(range.max);

  consoleLog && console.log(`.min: `, range.min);
  toBe.number(range.min);

  consoleLog && console.log(`.valueOf(): `, range.valueOf());
  toBe
    .object(range.valueOf())
    .number(range.valueOf().max)
    .number(range.valueOf().min);

  isNumber(minmax.min) && (expect(range.get.min).toEqual(minmax.min), expect(range.valueOf().min).toEqual(minmax.min));
  isNumber(minmax.max) && (expect(range.get.max).toEqual(minmax.max), expect(range.valueOf().max).toEqual(minmax.max));

  consoleLog && console.groupEnd();
};
