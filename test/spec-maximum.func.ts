import { TestingToBeMatchers } from '@angular-package/testing';
import { isUndefined, isNumber } from '@angular-package/type';
import { Maximum } from '../src/lib/maximum.class';

const toBe = new TestingToBeMatchers();

export const specMaximum = <Max extends number>(
  max: Max,
  maximum?: Maximum<Max>,
  consoleLog = false
) => {
  consoleLog && console.group(`new Maximum(${max})`);
  isUndefined(maximum) && (maximum = new Maximum(max));

  consoleLog && console.log(maximum);
  toBe.instance(maximum, Maximum).number(maximum);

  consoleLog && console.log(`.get: `, maximum.get);
  toBe.number(maximum.get);

  consoleLog && console.log(`.valueOf(): `, maximum.valueOf());
  toBe.number(maximum.valueOf());

  isNumber(max) && (expect(maximum.get).toEqual(max), expect(maximum.valueOf()).toEqual(max));

  consoleLog && console.groupEnd();
};
