// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { Maximum } from '../lib/maximum.class';
import { specMaximum } from '../../test/spec-maximum.func';
// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
// Testing.
testing.describe(`Maximum`, () => {
  console.group(`Maximum`);

  let min = Math.floor(Math.random() * 10);
  let max = Math.floor(Math.random() * 100) + 11;

  beforeEach(() => {
    min = Math.floor(Math.random() * 10);
    max = Math.floor(Math.random() * 100) + 11;
  });

  testing
    .toBeClass(Maximum)
    .toBeNumberType(new Maximum(max).get)
    .toEqual(`Must be equal to ${max}`, new Maximum(max).get, max)

  .describe(`static`, () => {
    testing
    .it(`properties`, () => {
      Maximum.set = max;
      toBe
        .instance(Maximum.getMaximum(), Maximum)
        .numberBetween(Maximum.get, { min, max })
        .numberBetween(Maximum.value, { min, max });
    })
    .it(`methods`, () => {
      Maximum.setMaximum(max);
      toBe
        .instance(Maximum.getMaximum(), Maximum)
        .numberBetween(Maximum.getMaximum().get, { min, max })
        .numberBetween(Maximum.getMaximum().valueOf(), { min, max });
    });
  })

  .it(`instance`, () => {
    specMaximum(max, undefined, true);
    specMaximum('0' as any, undefined, true);
    specMaximum(null as any, undefined, true);
    specMaximum(undefined as any, undefined, true);
  });

  console.groupEnd();
});
