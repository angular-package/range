// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { Maximum } from '../lib/maximum.class';
// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
// Testing.
testing.describe(`Maximum`, () => {
  console.group(`Maximum`);

  let min: number;
  let max: number;

  beforeEach(() => {
    min = 27;
    max = 27;
  });

  testing
    .toBeClass(Maximum)
    .toBeNumberType(new Maximum(3).get)
    .toEqual('Must be equal to 3', new Maximum(3).get, 3);

  testing.describe(`static`, () => {
    testing
    .it(`properties`, () => {
      Maximum.set = 27;
      toBe
        .numberBetween(Maximum.get, { min, max })
        .numberBetween(Maximum.value, { min, max });
      Maximum.set = 127;
      toBe
        .instance(Maximum.getMaximum(), Maximum)
        .numberBetween(Maximum.get, { min: 127, max: 127 })
        .numberBetween(Maximum.value, { min: 127, max: 127 });
    })
    .it(`methods`, () => {
      Maximum.setMaximum(min);
      toBe
        .instance(Maximum.getMaximum(), Maximum)
        .numberBetween(Maximum.getMaximum().get, { min, max })
        .numberBetween(Maximum.getMaximum().valueOf(), { min, max });
    });
  })

  .it(`initialize with value 3`, () => {
    const minimum = new Maximum(3);
    toBe
      .number(minimum.get)
      .number(minimum.valueOf());
  })
  .it(`initialize with string`, () => {
    const minimum = new Maximum(null as any);
    toBe
      .not.number(minimum.get)
      .not.number(minimum.valueOf());
  });
  console.groupEnd();
});
