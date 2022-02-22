
# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0-beta.0] - 2022-02-22

### [1.0.0-beta.0] Added

- Generic type variable `Step` of default value 1 and the `step` parameter in the constructor that uses it; [e0aaca9]
- The `stepByStep()` method that performs a callback function with the ability to decide when to move to the next step of the range. [e0aaca9]
- The `getRange()` method to return a range of numbers from minimum to maximum with the step; [e0aaca9]
- The `forEachStep()` method to perform the specified action for each step in the range of an array; [e0aaca9]
- The `get` accessor `range` that obtains the range of an `array` number from the minimum to the maximum with the step of a specified `Range` object; [e0aaca9]
- The `get` accessor `step` that obtains the step of a specified `Range` object; [e0aaca9]
- The `#step` private property of the generic type variable `Step` that indicates the range step; [e0aaca9]
- The`step` parameter to the static `create()` method of generic type variable `Step`; [e0aaca9]

[e0aaca9]: https://github.com/angular-package/range/commit/e0aaca9b5bc146e06278752979d825f4832c0502
