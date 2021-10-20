// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { Range } from '../lib/range.class';
// Support for testing.
import { specRange } from '../../test/spec-range.func';
import { specRangeMin } from '../../test/spec-range-min.func';
import { specRangeMax } from '../../test/spec-range-max.func';
import { specMaximum } from '../../test/spec-maximum.func';
import { specMinimum } from '../../test/spec-minimum.func';
// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
// Testing.
testing.describe(`Range`, () => {
  console.group(`Range`);

  let min = Math.floor(Math.random() * 100);
  let max = Math.floor(Math.random() * 1000) + 100;

  beforeEach(() => {
    min = Math.floor(Math.random() * 100);
    max = Math.floor(Math.random() * 1000) + 100;
  });

  testing
    .toBeClass(Range)
    .toBeInstanceOfObject(new Range({ min, max }).valueOf())
    .toEqual(`Must be equal to ${JSON.stringify({ min, max })}`, new Range({ min, max }).get, { min, max })

  .describe(`instance`, () => testing
    .it(`initialize with string`, () => {
      const minimum = new Range(null as any);
      toBe
        .not.number(minimum.get)
        .not.number(minimum.valueOf());
    })
    .it(`specRangeMax()`, () => specRangeMax({ max }, undefined, true))
    .it(`specRangeMin()`, () => specRangeMin({ min }, undefined, true))
    .it(`specRange()`, () => specRange({ min, max }, undefined, true)))

  .describe(`static`, () => {
    testing
    // Define.
    .it(`.specMaximum()`, () => specMaximum(max, Range.defineMaximum(max), true))
    .it(`.specMinimum()`, () => specMinimum(min, Range.defineMinimum(min), true))
    .it(`.specRangeMin()`, () => specRangeMin({ min }, Range.defineRange({ min }), true))
    .it(`.specRangeMax()`, () => specRangeMax({ max }, Range.defineRange({ max }), true))
    .it(`.specRange()`, () => specRange({ min, max }, Range.defineRange({ min, max }), true))
    // is
    .it(`.specMaximum()`, () => {
      toBe
        .boolean(Range.isRange(Range.defineRange({ min, max })))
        .true(Range.isRange(Range.defineRange({ min, max })));
      expect(Range.isRange(Range.defineRange({ min, max }))).toEqual(true);
    })
    // Set methods.
    .it(`.specMaximum()`, () => specMaximum(max, Range.setMaximum(max).getMaximum(), true))
    .it(`.specMinimum()`, () => specMinimum(min, Range.setMinimum(min).getMinimum(), true))
    .it(`.setRange()`, () => {
      specRange({ min: 10, max: 20 }, Range.setRange({ min: 10, max: 20 }).getRange(), true);
      expect(Range.get.max).toEqual(20);
      expect(Range.get.min).toEqual(10);
      expect(Range.getMax()).toEqual(20);
      expect(Range.getMin()).toEqual(10);
      expect(Range.value).toEqual({ min: 10, max: 20 });
      expect(Range.min).toEqual(10);
      expect(Range.max).toEqual(20);
    })
    // Set properties.
    .it(`.setRange()`, () => {
      Range.set = { min, max };
      specRange({ min, max }, Range.getRange(), true);
      expect(Range.get.max).toEqual(max);
      expect(Range.get.min).toEqual(min);
    })

    .it(`properties \`get\`, \`set\`, \`value\``, () => {
      Range.set = { min, max };
      toBe
        .numberBetween(Range.get.max, { min, max })
        .numberBetween(Range.get.min, { min, max })
        .numberBetween(Range.value.max, { min, max })
        .numberBetween(Range.value.min, { min, max });

      Range.set = { min: 127, max: 127 };
      toBe
        .instance(Range.getRange(), Range)
        .numberBetween(Range.get.max, { min: 127, max: 127 })
        .numberBetween(Range.value.min, { min: 127, max: 127 });
    })

    .it(`setRange(${JSON.stringify({min, max})})`, () => {
      Range.setRange({ min, max });
      toBe
        .instance(Range.getRange(), Range)
        .numberBetween(Range.getRange().get.min, { min })
        .numberBetween(Range.getRange().valueOf().max, { max });
    });
  });

  console.groupEnd();
});
