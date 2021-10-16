// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { Minimum } from '../lib/minimum.class';
// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
// Testing.
testing.describe(`Minimum`, () => {
  console.group(`Minimum`);

  let min: number;
  let max: number;

  beforeEach(() => {
    min = 27;
    max = 27;
  });

  testing
    .toBeClass(Minimum)
    .toBeNumberType(new Minimum(3).get)
    .toEqual('Must be equal to 3', new Minimum(3).get, 3);

  testing.describe(`static`, () => {
    testing
    .it(`properties`, () => {
      Minimum.set = 27;
      toBe
        .numberBetween(Minimum.get, { min, max })
        .numberBetween(Minimum.value, { min, max });
      Minimum.set = 127;
      toBe
        .instance(Minimum.getMinimum(), Minimum)
        .numberBetween(Minimum.get, { min: 127, max: 127 })
        .numberBetween(Minimum.value, { min: 127, max: 127 });
    })
    .it(`methods`, () => {
      Minimum.setMinimum(min);
      toBe
        .instance(Minimum.getMinimum(), Minimum)
        .numberBetween(Minimum.getMinimum().get, { min, max })
        .numberBetween(Minimum.getMinimum().valueOf(), { min, max });
    });
  })

  .it(`initialize with value 3`, () => {
    const minimum = new Minimum(3);
    toBe
      .number(minimum.get)
      .number(minimum.valueOf());
  })
  .it(`initialize with string`, () => {
    const minimum = new Minimum(null as any);
    toBe
      .not.number(minimum.get)
      .not.number(minimum.valueOf());
  });
  console.groupEnd();
});
