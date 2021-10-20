// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { Minimum } from '../lib/minimum.class';
import { specMinimum } from '../../test/spec-minimum.func';
// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
// Testing.
testing.describe(`Minimum`, () => {
  console.group(`Minimum`);

  let min = Math.floor(Math.random() * 100);
  let max = Math.floor(Math.random() * 1000) + 100;

  beforeEach(() => {
    min = Math.floor(Math.random() * 100);
    max = Math.floor(Math.random() * 1000) + 100;
  });

  testing
    .toBeClass(Minimum)
    .toBeNumberType(new Minimum(min).get)
    .toEqual(`Must be equal to ${min}`, new Minimum(min).get, min)

  .describe(`static`, () => {
    testing
    .it(`properties`, () => {
      Minimum.set = min;
      toBe
        .instance(Minimum.getMinimum(), Minimum)
        .numberBetween(Minimum.get, { min, max })
        .numberBetween(Minimum.value, { min, max });
    })
    .it(`methods`, () => {
      Minimum.setMinimum(min);
      toBe
        .instance(Minimum.getMinimum(), Minimum)
        .numberBetween(Minimum.getMinimum().get, { min, max })
        .numberBetween(Minimum.getMinimum().valueOf(), { min, max });
    });
  })

  .it(`instance`, () => {
    specMinimum(min, undefined, true);
    specMinimum('0' as any, undefined, true);
    specMinimum(null as any, undefined, true);
    specMinimum(undefined as any, undefined, true);
  });

  console.groupEnd();
});
