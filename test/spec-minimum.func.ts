import { TestingToBeMatchers } from '@angular-package/testing';
import { isNumber, isUndefined } from '@angular-package/type';
import { Minimum } from '../src/lib/minimum.class';

const toBe = new TestingToBeMatchers();

export const specMinimum = <Min extends number>(
  min: Min,
  minimum?: Minimum<Min>,
  consoleLog = false
) => {
  consoleLog && console.group(`new Minimum(${min})`);
  isUndefined(minimum) && (minimum = new Minimum(min));

  consoleLog && console.log(minimum);
  toBe.instance(minimum, Minimum).number(minimum);

  consoleLog && console.log(`.get: `, minimum.get);
  toBe.number(minimum.get);

  consoleLog && console.log(`.valueOf(): `, minimum.valueOf());
  toBe.number(minimum.valueOf());

  isNumber(min) && (expect(minimum.get).toEqual(min), expect(minimum.valueOf()).toEqual(min));

  consoleLog && console.groupEnd();
};
