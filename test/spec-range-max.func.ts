import { MinMax, isNumber, isUndefined } from '@angular-package/type';
import { TestingToBeMatchers } from '@angular-package/testing';

import { Range } from '../src/lib/range.class';
import { Maximum } from '../src/lib/maximum.class';
import { Minimum } from '../src/lib/minimum.class';

const toBe = new TestingToBeMatchers();

export const specRangeMax = <Min extends number, Max extends number>(
  minmax: MinMax<Min, Max>,
  range?: Range<Min, Max>,
  consoleLog = false
) => {
  consoleLog && console.group(`new Range({ max: ${minmax.max} })`);
  isUndefined(range) && (range = new Range(minmax));

  consoleLog && console.log(range);
  toBe.instance(range, Range).object(range);

  consoleLog && console.log(`.get: `, range.get);
  toBe
    .object(range.get)
    .objectKeys(range.get, ['max'])
    .number(range.get.max)
    .not.number(range.get.min)
    .undefined(range.get.min);

  consoleLog && console.log(`.getMax(): `, range.getMax());
  toBe.number(range.getMax());

  consoleLog && console.log(`.getMaximum(): `, range.getMaximum());
  toBe
    .instance(range.getMaximum(), Maximum)
    .number(range.getMaximum()?.get)
    .number(range.getMaximum()?.valueOf());

  consoleLog && console.log(`.getMin(): `, range.getMin());
  toBe.not.number(range.getMin()).undefined(range.getMin());

  consoleLog && console.log(`.getMinimum(): `, range.getMinimum());
  toBe.not
    .instance(range.getMinimum(), Minimum)
    .not.number(range.getMinimum()?.get)
    .not.number(range.getMinimum()?.valueOf())
    .undefined(range.getMinimum()?.get)
    .undefined(range.getMinimum()?.valueOf());

  consoleLog && console.log(`.max: `, range.max);
  toBe.number(range.max);

  consoleLog && console.log(`.min: `, range.min);
  toBe.not.number(range.min).undefined(range.min);

  consoleLog && console.log(`.valueOf(): `, range.valueOf());
  toBe
    .object(range.valueOf())
    .number(range.valueOf().max)
    .not.number(range.valueOf().min)
    .undefined(range.valueOf().min);

  isNumber(minmax.max) && (expect(range.get.max).toEqual(minmax.max), expect(range.valueOf().max).toEqual(minmax.max));

  consoleLog && console.groupEnd();
};
