import { MinMax, isNumber, isUndefined } from '@angular-package/type';
import { TestingToBeMatchers } from '@angular-package/testing';

import { Range } from '../src/lib/range.class';
import { Maximum } from '../src/lib/maximum.class';
import { Minimum } from '../src/lib/minimum.class';

const toBe = new TestingToBeMatchers();

export const specRangeMin = <Min extends number, Max extends number>(
  minmax: MinMax<Min, Max>,
  range?: Range<Min, Max>,
  consoleLog = false
) => {
  consoleLog && console.group(`new Range({ min: ${minmax.min} })`);
  isUndefined(range) && (range = new Range(minmax));

  consoleLog && console.log(range);
  toBe.instance(range, Range).object(range);

  consoleLog && console.log(`.get: `, range.get);
  toBe
    .object(range.get)
    .objectKeys(range.get, ['min'])
    .undefined(range.get.max)
    .number(range.get.min);

  consoleLog && console.log(`.getMax(): `, range.getMax());
  toBe.not.number(range.getMax()).undefined(range.getMax());

  consoleLog && console.log(`.getMaximum(): `, range.getMaximum());
  toBe.not
    .instance(range.getMaximum(), Maximum)
    .not.number(range.getMaximum()?.get)
    .not.number(range.getMaximum()?.valueOf())
    .undefined(range.getMaximum()?.get)
    .undefined(range.getMaximum()?.valueOf());

  consoleLog && console.log(`.getMin(): `, range.getMin());
  toBe.number(range.getMin());

  consoleLog && console.log(`.getMinimum(): `, range.getMinimum());
  toBe
    .instance(range.getMinimum(), Minimum)
    .number(range.getMinimum()?.get)
    .number(range.getMinimum()?.valueOf());

  consoleLog && console.log(`.max: `, range.max);
  toBe.not.number(range.max).undefined(range.max);

  consoleLog && console.log(`.min: `, range.min);
  toBe.number(range.min);

  consoleLog && console.log(`.valueOf(): `, range.valueOf());
  toBe
    .object(range.valueOf())
    .not.number(range.valueOf().max)
    .undefined(range.valueOf().max)
    .number(range.valueOf().min);

  isNumber(minmax.min) && (expect(range.get.min).toEqual(minmax.min), expect(range.valueOf().min).toEqual(minmax.min));

  consoleLog && console.groupEnd();
};
