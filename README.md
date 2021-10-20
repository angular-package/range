# Packages

Useful and simple to use packages based on the [angular.io][angulario].

| Package                              | Description                                            | Status |
| :----------------------------------- | :----------------------------------------------------- | -----: |
| [callback][callback-github-readme]   | Manages the callback [`function`][js-function].        | [![npm version][callback-npm-badge-png]][callback-npm-badge] |
| [change-detection][cd-github-readme] | Improves application performance.                      | [![npm version][cd-npm-badge-png]][cd-npm-badge] |
| [component-loader][cl-github-readme] | Handles dynamic loading components.                    | [![npm version][cl-npm-badge-png]][cl-npm-badge] |
| [core][core-github-readme]           | Core features.                                         | [![npm version][core-npm-badge-png]][core-npm-badge] |
| [error][error-github-readme]         | Manages an [`Error`][js-error].                        | [![npm version][error-npm-badge-png]][error-npm-badge] |
| [name][name-github-readme]           | The name with prefix and suffix.                       | [![npm version][name-npm-badge-png]][name-npm-badge] |
| [prism][prism-github-readme]         | [`Prism`][prism-js] highlighter module.                | [![npm version][prism-npm-badge-png]][prism-npm-badge] |
| [property][property-github-readme]   | Handles object properties.                             | [![npm version][property-npm-badge-png]][property-npm-badge] |
| **[range][range-github-readme]**     | **The range between a minimum and maximum.**           | [![npm version][range-npm-badge-png]][range-npm-badge] |
| [reactive][reactive-github-readme]   | Automatize the process of creating some rxjs features. | [![npm version][reactive-npm-badge-png]][reactive-npm-badge] |
| [storage][storage-github-readme]     | The storage of data under allowed names.               | [![npm version][storage-npm-badge-png]][storage-npm-badge] |
| [testing][testing-github-readme]     | Support for testing other packages.                    | [![npm version][testing-npm-badge-png]][testing-npm-badge] |
| [type][type-github-readme]           | Common types, type guards, and type checkers.          | [![npm version][type-npm-badge-png]][type-npm-badge] |
| [ui][ui-github-readme]               | User interface.                                        | *In Progress* |

> Click on the package name to visit its [GitHub](https://github.com/) page.

## angular-package/range

The range between a minimum and maximum.

[![Gitter][gitter-badge]][gitter-chat]
<!-- npm badge -->
[![npm version][range-npm-badge-svg]][range-npm-badge]
<!-- GitHub badges -->
[![GitHub issues][range-badge-issues]][range-issues]
[![GitHub forks][range-badge-forks]][range-forks]
[![GitHub stars][range-badge-stars]][range-stars]
[![GitHub license][range-badge-license]][range-license]
<!-- Sponsors badges -->
[![GitHub sponsors][github-badge-sponsor]][github-sponsor-link]
[![Support me on Patreon][patreon-badge]][patreon-link]

----

## Table of contents

* [Basic concepts](#basic-concepts)
* [Skeleton](#skeleton)
* [Installation](#installation)
* [Api](#api)
* [Object](#object)
  * [`Maximum`](#maximum)
  * [`Minimum`](#minimum)
  * [`Range`](#range)
* [Changelog](#changelog)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

----

<br>

## Basic concepts

Checks
> It's to check the provided value to be **the same** as **expected**.

Type guard (constrain)
> Constrains the parameter type to **not let** input **unexpected** value in the **code editor**.

Guards
> It's a **combination** of both above, **constrains** the type of the parameter in the **code editor**, and checks its provided argument.

Defines
> Returns defined value from a method of an object.  
> Defines new value in an object and returns a defined value.  

Gets
> Returns a value from an object.

Sets
> Adds or updates an element with a specified key and a value to an object and returns an object.  

<br>

## Skeleton

This package was built by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

Copy this package to the `packages/range` folder of the [library skeleton][skeleton] then run the commands below.

### Code scaffolding

Run `ng generate component component-name --project range` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project range`.
> Note: Don't forget to add `--project range` or else it will be added to the default project in your `angular.json` file.

### Build

Run `ng build range` to build the package. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build range`, go to the dist folder `cd dist/range` and run `npm publish`.

### Running unit tests

Install `@angular-package/testing` with command:

```typescript
npm i @angular-package/testing --no-save
```

Run `ng test range` to execute the unit tests via [Karma](https://karma-runner.github.io).

<br>

## Installation

Install `@angular-package/range` package with command:

```bash
npm i @angular-package/range --save
```

<br>

## Api

```typescript
import {
  // Class.
  Maximum,
  Minimum,
  Range,
} from '@angular-package/range';
```

<br>

## Object

### `Maximum`

The `Maximum` [primitive][js-primitive] wrapper [`object`][js-object] represents the maximum [`number`][js-number].

<br>

**Static public properties:**

| Maximum.                 | Description |
| :----------------------- | :---------- |
| [`get`](#maximumget)     | The [`static`][js-static] `get` property of [`number`][js-number] **returns** the [primitive][js-primitive] value of the [`Maximum`](#maximum) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`set`](#maximumset)     | The [`static`][js-static] `set` property of the [`number`][js-number] type **sets** a new instance of [`Maximum`](#maximum) with its provided value. The set value can be got by the static [`get`](#maximumget) and [`value`](#maximumvalue) properties, or the static [`getMaximum()`](#maximumgetmaximum) method. |
| [`value`](#maximumvalue) | The [`static`][js-static] `value` property of the [`number`][js-number] type **sets** a new instance of [`Maximum`](#maximum) with its provided value and **returns** the [primitive][js-primitive] value of [`Maximum`](#maximum) instance if set, otherwise returns [`undefined`][js-undefined]. |

<br>

**Instance public properties:**

| Maximum.prototype.            | Description |
| :---------------------------- | :---------- |
| [`get`](#maximumprototypeget) | The property `get` returns the [primitive][js-primitive] value of the generic type variable `Max` of the [`Maximum`](#maximum) instance. |

<br>

**Static public methods:**

| Maximum.                             | Description |
| :----------------------------------- | :---------- |
| [`getMaximum()`](#maximumgetmaximum) | The [`static`][js-static] `getMaximum()` method **returns** an instance of [`Maximum`](#maximum) if set otherwise returns [`undefined`][js-undefined]. |
| [`isMaximum()`](#maximumismaximum)   | The [`static`][js-static] `isMaximum()` method **checks** the provided `value` of [`any`][ts-any] type, whether is an instance of [`Maximum`](#maximum). |
| [`setMaximum()`](#maximumsetmaximum) | The [`static`][js-static] `setMaximum()` method **sets** a new instance of [`Maximum`](#maximum) with the provided `maximum`. |

<br>

**Constructor:**

| Constructor                         | Description |
| :---------------------------------- | :---------- |
| [`Maximum()`](#maximum-constructor) | Creates a new instance of [`Maximum`](#maximum). |

<br>

**Instance public methods:**

| Maximum.prototype.                      | Description |
| :-------------------------------------- | :---------- |
| [`valueOf()`](#maximumprototypevalueof) | The `valueOf()` method returns the [primitive][js-primitive] value of the generic type variable `Max` of the specified [`Maximum`](#maximum) object. |

<br>

### `Maximum` static public properties

#### `Maximum.get`

The [`static`][js-static] `get` property of [`number`][js-number] **returns** the [primitive][js-primitive] value of the [`Maximum`](#maximum) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public static get get(): number {
  return this.#maximum?.valueOf();
}
```

**Usage:**

```typescript
// Example usage.
import { Maximum } from '@angular-package/range';

// Returns undefined of type number.
const value = Maximum.get;

Maximum.set = 27;
// Returns 27 of type number.
const value1 = Maximum.get;
```

<br>

#### `Maximum.set`

The [`static`][js-static] `set` property of the [`number`][js-number] type **sets** a new instance of [`Maximum`](#maximum) with its provided value. The set value can be got by the static [`get`](#maximumget) and [`value`](#maximumvalue) properties, or the static [`getMaximum()`](#maximumgetmaximum) method.

```typescript
public static set set(maximum: number) {
  this.value = maximum;
}
```

**Usage:**

```typescript
// Example usage.
import { Maximum } from '@angular-package/range';

Maximum.set = 27;
// Returns 27 of type number.
const value = Maximum.get;

Maximum.set = Number(127);
// Returns 127 of type number.
const value1 = Maximum.get;

Maximum.set = String(327) as any;
// Returns 127 of type number, cause of` guardNumber()`.
const value2 = Maximum.get;
```

<br>

#### `Maximum.value`

The [`static`][js-static] `value` property of the [`number`][js-number] type **sets** a new instance of [`Maximum`](#maximum) with its provided value and **returns** the [primitive][js-primitive] value of [`Maximum`](#maximum) instance if set, otherwise returns [`undefined`][js-undefined].

```typescript
public static get value(): number {
  return this.#maximum?.valueOf();
}
public static set value(maximum: number) {
  guardNumber(maximum) && (this.#maximum = new Maximum(maximum));
}
```

**Usage:**

```typescript
// Example usage.
import { Maximum } from '@angular-package/range';

Maximum.value = 27;
// Returns 27 of type number.
const value = Maximum.value;

Maximum.value = Number(127);
// Returns 127 of type number.
const value1 = Maximum.value;

Maximum.value = String(327) as any;
// Returns 127 of type number, cause of` guardNumber()`.
const value2 = Maximum.value;
```

<br>

### `Maximum` instance public properties

#### `Maximum.prototype.get`

The property `get` returns the [primitive][js-primitive] value of the generic type variable `Max` of the [`Maximum`](#maximum) instance.

```typescript
public get get(): Max {
  return super.valueOf() as Max;
}
```

**Usage:**

```typescript
// Example usage.
import { Maximum } from '@angular-package/range';

// Returns undefined of type number.
const value = Maximum.get;

Maximum.set = 27;
// Returns 27 of type number.
const value1 = Maximum.get;
```

<br>

### `Maximum` static public methods

#### `Maximum.getMaximum()`

The [`static`][js-static] `getMaximum()` method **returns** an instance of [`Maximum`](#maximum) if set otherwise returns [`undefined`][js-undefined].

```typescript
public static getMaximum<Max extends number>(): Maximum<Max> {
  return this.#maximum;
}
```

**Generic type variables:**

| Name  | Default value         | Description |
| :---- | :-------------------: | :---------- |
| `Max` | [`number`][ts-number] | A generic type variable `Max` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of the [`Maximum`](#maximum) instance via the return type. |

**Returns:**

| Returns        | Type                  | Description |
| :------------- | :-------------------: | :---------- |
| `Maximum<Max>` | [`class`][ts-classes] | The **return type** is a [`class`][ts-classes] of [`Maximum`](#maximum) that takes the generic type variable `Max`. |

REVIEW: | `Maximum<Max>` | [`class`][ts-classes] | The **return type** is a [`class`][ts-classes] as the result of its statement, indicating the `value` is a generic type variable `Type` constrained by [`AnyBoolean`](#anyboolean) by default equal to the `boolean`. |

The **return value** is an instance of [`Maximum`](#maximum) if set otherwise returns [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { Maximum } from '@angular-package/range';

// Returns undefined of type Maximum<number>.
const value = Maximum.getMaximum();

Maximum.set = 27;
// Returns Maximum {27} of type Maximum<number>.
const value1 = Maximum.getMaximum();

Maximum.set = 127;
// Returns Maximum {127} of type Maximum<127>.
const value2 = Maximum.getMaximum<127>();
```

<br>

#### `Maximum.isMaximum()`

The [`static`][js-static] `isMaximum()` method **checks** the provided `value` of [`any`][ts-any] type, whether is an instance of [`Maximum`](#maximum).

```typescript
public static isMaximum<Max extends number>(
  value: any,
  callback?: ResultCallback<any>
): value is Maximum<Max> {
  return isInstance(value, Maximum, callback);
}
```

**Generic type variables:**

| Name  | Default value         | Description |
| :---- | :-------------------: | :---------- |
| `Max` | [`number`][ts-number] | A generic type variable `Max` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of the [`Maximum`](#maximum) instance via the return type. |

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `value: any`                     | The value of [`any`][ts-any] type to test against the [`Maximum`](#minimum) instance. |
| `callback?: ResultCallback<any>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `value` is an instance of [`Maximum`](#maximum). |

**Returns:**

| Returns                 | Type                    | Description |
| :---------------------- | :---------------------: | :---------- |
| `value is Maximum<Max>` | [`boolean`][ts-boolean] | The **return type** is a [`boolean`][ts-boolean] indicating the `value` is a [`class`][ts-classes] of [`Maximum`](#maximum) that takes the generic type variable `Max`. |

The **return value** is a [`boolean`][js-boolean] indicating whether the provided `value` is an instance of [`Maximum`](#maximum).

**Usage:**

```typescript
// Example usage.
import { Maximum } from '@angular-package/range';

// Returns true.
Maximum.isMaximum(new Maximum(27));

const value: any = new Maximum(27);

// Returns true.
if (Maximum.isMaximum<27>(value)) {
  // Returns Maximum {27} of type Maximum<27>
  value;
}
```

<br>

#### `Maximum.setMaximum()`

The [`static`][js-static] `setMaximum()` method **sets** a new instance of [`Maximum`](#maximum) with the provided `maximum`.

```typescript
public static setMaximum<Max extends number>(
  maximum: Max,
  callback?: ResultCallback<Max>
): typeof Maximum {
  guardNumber(maximum, callback) && (this.#maximum = new Maximum(maximum));
  return this;
}
```

**Generic type variables:**

| Name  | Default value                        | Description |
| :---- | :----------------------------------: | :---------- |
| `Max` | Captured from the supplied `maximum` | A generic type variable `Max` constrained by the [`number`][ts-number] type, by default of the value captured from the supplied `maximum` parameter indicates the **type** of this parameter and the `value` parameter of the [`ResultCallback`][package-callback-resultcallback] function from the supplied `callback`. |

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `maximum: Max`                   | The **maximum** value of the generic type variable `Max` to **set** a new instance of [`Maximum`](#maximum).  |
| `callback?: ResultCallback<Max>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `maximum` is a [`number`][js-number] type. |

**Returns:**

| Returns          | Type                  | Description |
| :--------------- | :-------------------: | :---------- |
| `typeof Maximum` | [`class`][ts-classes] | The **return type** is  a [`class`][ts-classes] of static [`Maximum`](#maximum). |

The **return value** is static [`Maximum`](#maximum).

**Usage:**

```typescript
// Example usage.
import { Maximum } from '@angular-package/range';

// Returns undefined of type Maximum<number>.
const value = Maximum.getMaximum();

Maximum.setMaximum(27);
// Returns Maximum {27} of type Maximum<number>.
const value1 = Maximum.getMaximum();

Maximum.setMaximum(127);
// Returns Maximum {127} of type Maximum<127>.
const value2 = Maximum.getMaximum<127>();
```

<br>

### `Maximum` constructor

#### `Maximum()`

Creates a new instance of [`Maximum`](#maximum).

```typescript
// Syntax.
constructor(
  maximum: Max = Maximum.#maximum?.get,
  callback?: ResultCallback<Max>
) {
  super((guardNumber(maximum, callback) && maximum) || 0);
}
```

**Generic type variables:**

| Name  | Default value               | Description |
| :---- | :-------------------------: | :---------- |
| `Max` | Captured from the `maximum` | A generic type variable `Max` constrained by the [`number`][ts-number] type, by default of the value captured from the supplied `maximum` indicates the **type** of the [primitive][js-primitive] value of [`Maximum`](#maximum) instance. |

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `maximum: Max`                   | The immutable maximum value of generic type variable `Max` of the [`Maximum`](#maximum) instance being created. Its default value can be set by the static [`set`](#maximumset) and [`value`](#maximumvalue) properties, or static [`setMaximum()`](#maximumsetmaximum) method and can be picked by property [`get`](#maximumprototypeget) or [`valueOf()`](#maximumprototypevalueof) method of an [`Maximum`](#maximum) instance. |
| `callback?: ResultCallback<Max>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `maximum` is a [`number`][js-number] type. |

**Returns:**

The **return value** is an instance of [`Maximum`](#maximum).

**Usage:**

```typescript
// Example usage.
import { Maximum } from '@angular-package/range';
import { typeOf } from '@angular-package/type';

// Returns Maximum {27} of type Maximum<27>
const maximum = new Maximum(27);

// Returns Maximum {127} of type Maximum<number>
const maximum1 = new Maximum(Number(127));

// Returns Maximum {NaN} of type Maximum<any>
const maximum2 = new Maximum(String(127) as any);

// Returns Maximum {NaN} of type Maximum<any>
const maximum3 = new Maximum(undefined as any);

// Returns 'maximum'.
typeOf(maximum1);

// Returns 'number'.
typeOf(maximum1.get);

// Returns 'number'.
typeOf(maximum1.valueOf());
```

<br>

### `Maximum` instance public methods

#### `Maximum.prototype.valueOf()`

The `valueOf()` method returns the [primitive][js-primitive] value of the generic type variable `Max` of the specified [`Maximum`](#maximum) object.

```typescript
public valueOf(): Max {
  return super.valueOf() as Max;
}
```

**Returns:**

| Returns | Type                  | Description |
| :------ | :-------------------: | :---------- |
| `Max`   | [`number`][ts-number] | A **return type** is a [`number`][ts-number] of generic type variable `Max`. |

The **return value** is [`number`][js-number] of generic type variable `Max`.

**Usage:**

```typescript
// Example usage.
import { Maximum } from '@angular-package/range';

const maximum = new Maximum(27);

// Returns 27 of type 27.
const value = maximum.valueOf();
```

<br>

### `Minimum`

The `Minimum` [primitive][js-primitive] wrapper [`object`][js-object] represents the minimum [`number`][js-number].

<br>

**Static public properties:**

| Minimum.                 | Description |
| :----------------------- | :---------- |
| [`get`](#minimumget)     | The [`static`][js-static] `get` property of [`number`][js-number] type **returns** the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`set`](#minimumset)     | The [`static`][js-static] `set` property of the [`number`][js-number] type **sets** a new instance of [`Minimum`](#minimum) with its provided value. The set value can be got by the static [`get`](#minimumget) and [`value`](#minimumvalue) properties, or the static [`getMinimum()`](#minimumgetminimum) method. |
| [`value`](#minimumvalue) | The [`static`][js-static] `value` property of [`number`][js-number] type **sets** a new instance of [`Minimum`](#minimum) with its provided value and **returns** the [primitive][js-primitive] value of [`Minimum`](#minimum) instance if set otherwise returns [`undefined`][js-undefined]. |

<br>

**Instance public properties:**

| Minimum.prototype.            | Description |
| :---------------------------- | :---------- |
| [`get`](#minimumprototypeget) | The property `get` returns the [primitive][js-primitive] value of the generic type variable `Min` of the [`Minimum`](#minimum) instance. |

<br>

**Static public methods:**

| Minimum.                             | Description |
| :----------------------------------- | :---------- |
| [`getMinimum()`](#minimumgetminimum) | The [`static`][js-static] `getMinimum()` method **returns** an instance of [`Minimum`](#minimum) if set otherwise returns [`undefined`][js-undefined]. |
| [`isMinimum()`](#minimumisminimum)   | The [`static`][js-static] `isMinimum()` method **checks** the provided value of [`any`][ts-any] type, whether is an instance of [`Minimum`](#minimum). |
| [`setMinimum()`](#minimumsetminimum) | The [`static`][js-static] `setMinimum()` method **sets** a new instance of [`Minimum`](#minimum) with the provided `minimum`. |

<br>

**Constructor:**

| Constructor                         | Description |
| :---------------------------------- | :---------- |
| [`Minimum()`](#minimum-constructor) | Creates a new instance of [`Minimum`](#minimum). |

<br>

**Instance public methods:**

| Minimum.prototype.                      | Description |
| :-------------------------------------- | :---------- |
| [`valueOf()`](#minimumprototypevalueof) | The [`valueOf()`](#minimumprototypevalueof) method returns the [primitive][js-primitive] value of the generic type variable `Min` of the specified [`Minimum`](#minimum) object. |

<br>

### `Minimum` static public properties

#### `Minimum.get`

The [`static`][js-static] `get` property of [`number`][js-number] type **returns** the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public static get get(): number {
  return this.#minimum?.valueOf();
}
```

**Usage:**

```typescript
// Example usage.
import { Minimum } from '@angular-package/range';

// Returns undefined of type number.
const value = Minimum.get;

Minimum.set = 27;
// Returns 27 of type number.
const value1 = Minimum.get;
```

<br>

#### `Minimum.set`

The [`static`][js-static] `set` property of the [`number`][js-number] type **sets** a new instance of [`Minimum`](#minimum) with its provided value. The set value can be got by the static [`get`](#minimumget) and [`value`](#minimumvalue) properties, or the static [`getMinimum()`](#minimumgetminimum) method. 

```typescript
public static set set(minimum: number) {
  this.value = minimum;
}
```

**Usage:**

```typescript
// Example usage.
import { Minimum } from '@angular-package/range';

Minimum.set = 27;
// Returns 27 of type number.
const value = Minimum.get;

Minimum.set = Number(127);
// Returns 127 of type number.
const value1 = Minimum.get;

Minimum.set = String(327) as any;
// Returns 127 of type number, cause of` guardNumber()`.
const value2 = Minimum.get;
```

<br>

#### `Minimum.value`

The [`static`][js-static] `value` property of [`number`][js-number] type **sets** a new instance of [`Minimum`](#minimum) with its provided value and **returns** the [primitive][js-primitive] value of [`Minimum`](#minimum) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public static get value(): number {
  return this.#minimum?.valueOf();
}
public static set value(minimum: number) {
  guardNumber(minimum) && (this.#minimum = new Minimum(minimum));
}
```

**Usage:**

```typescript
// Example usage.
import { Minimum } from '@angular-package/range';

Minimum.value = 27;
// Returns 27 of type number.
const value = Minimum.value;

Minimum.value = Number(127);
// Returns 127 of type number.
const value1 = Minimum.value;

Minimum.value = String(327) as any;
// Returns 127 of type number, cause of` guardNumber()`.
const value2 = Minimum.value;
```

<br>

### `Minimum` instance public properties

#### `Minimum.prototype.get`

The property `get` returns the [primitive][js-primitive] value of the generic type variable `Min` of the [`Minimum`](#minimum) instance.

```typescript
public get get(): Min {
  return super.valueOf() as Min;
}
```

**Usage:**

```typescript
// Example usage.
import { Minimum } from '@angular-package/range';

// Returns undefined of type number.
const value = Minimum.get;

Minimum.set = 27;
// Returns 27 of type number.
const value1 = Minimum.get;
```

<br>

### `Minimum` static public methods

#### `Minimum.getMinimum()`

The [`static`][js-static] `getMinimum()` method **returns** an instance of [`Minimum`](#minimum) if set otherwise returns [`undefined`][js-undefined].

```typescript
public static getMinimum<Min extends number>(): Minimum<Min> {
  return this.#minimum;
}
```

**Generic type variables:**

| Name  | Default value         | Description |
| :---- | :-------------------: | :---------- |
| `Min` | [`number`][ts-number] | A generic type variable `Min` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance via the return type. |

**Returns:**

| Returns        | Type                  | Description |
| :------------- | :-------------------: | :---------- |
| `Minimum<Min>` | [`class`][ts-classes] | The **return type** is a [`class`][ts-classes] of [`Minimum`](#minimum) that takes the generic type variable `Min`. |

The **return value** is an instance of [`Minimum`](#minimum) if set otherwise returns [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { Minimum } from '@angular-package/range';

// Returns undefined of type Minimum<number>.
const value = Minimum.getMinimum();

Minimum.set = 27;
// Returns Minimum {27} of type Minimum<number>.
const value1 = Minimum.getMinimum();

Minimum.set = 127;
// Returns Minimum {127} of type Minimum<127>.
const value2 = Minimum.getMinimum<127>();
```

<br>

#### `Minimum.isMinimum()`

The [`static`][js-static] `isMinimum()` method **checks** the provided `value` of [`any`][ts-any] type, whether is an instance of [`Minimum`](#minimum).

```typescript
public static isMinimum<Min extends number>(
  value: any,
  callback?: ResultCallback<any>
): value is Minimum<Min> {
  return isInstance(value, Minimum, callback);
}
```

**Generic type variables:**

| Name  | Default value         | Description |
| :---- | :-------------------: | :---------- |
| `Min` | [`number`][ts-number] | A generic type variable `Min` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance via the return type. |

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `value: any`                     | The value of [`any`][ts-any] type to test against the [`Minimum`](#minimum) instance. |
| `callback?: ResultCallback<any>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `value` is an instance of [`Minimum`](#minimum). |

**Returns:**

| Returns                 | Type                    | Description |
| :---------------------- | :---------------------: | :---------- |
| `value is Minimum<Min>` | [`boolean`][ts-boolean] | The **return type** is a [`boolean`][ts-boolean] indicating the `value` is a [`class`][ts-classes] of [`Minimum`](#minimum) that takes the generic type variable `Min`. |

The **return value** is a [`boolean`][js-boolean] indicating whether the provided `value` is an instance of [`Minimum`](#minimum).

**Usage:**

```typescript
// Example usage.
import { Minimum } from '@angular-package/range';

// Returns true.
Minimum.isMinimum(new Minimum(9));

const value: any = new Minimum(9);

// Returns true.
if (Minimum.isMinimum<9>(value)) {
  // Returns Minimum{9} of type Minimum<9>
  value;
}
```

<br>

#### `Minimum.setMinimum()`

The [`static`][js-static] `setMinimum()` method **sets** a new instance of [`Minimum`](#minimum) with the provided `minimum`.

```typescript
public static setMinimum<Min extends number>(
  minimum: Min,
  callback?: ResultCallback<Min>
): typeof Minimum {
  guardNumber(minimum, callback) && (this.#minimum = new Minimum(minimum));
  return this;
}
```

**Generic type variables:**

| Name  | Default value                        | Description |
| :---- | :----------------------------------: | :---------- |
| `Min` | Captured from the supplied `minimum` | A generic type variable `Min` constrained by the [`number`][ts-number] type, by default of the value captured from the supplied `minimum` parameter indicates the **type** of this parameter and the `value` parameter of the [`ResultCallback`][package-callback-resultcallback] function from the supplied `callback`. |

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `minimum: Min`                   | The **minimum** value of the generic type variable `Min` to **set** a new instance of [`Minimum`](#minimum). |
| `callback?: ResultCallback<Min>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `minimum` is a [`number`][js-number] type. |

**Returns:**

| Returns          | Type                  | Description |
| :--------------- | :-------------------: | :---------- |
| `typeof Minimum` | [`class`][ts-classes] | The **return type** is  a [`class`][ts-classes] of static [`Minimum`](#minimum). |

The **return value** is static [`Minimum`](#minimum).

**Usage:**

```typescript
// Example usage.
import { Minimum } from '@angular-package/range';

// Returns undefined of type Minimum<number>.
const value = Minimum.getMinimum();

Minimum.setMinimum(27);
// Returns Minimum {27} of type Minimum<number>.
const value1 = Minimum.getMinimum();

Minimum.setMinimum(127);
// Returns Minimum {127} of type Minimum<127>.
const value2 = Minimum.getMinimum<127>();
```

<br>

### `Minimum` constructor

#### `Minimum()`

Creates a new instance of [`Minimum`](#minimum).

```typescript
// Syntax.
constructor(
  minimum: Min = Minimum.#minimum?.get,
  callback?: ResultCallback<Min>
) {
  super((guardNumber(minimum, callback) && minimum) || 0);
}
```

**Generic type variables:**

| Name  | Default value               | Description |
| :---- | :-------------------------: | :---------- |
| `Min` | Captured from the `minimum` | A generic type variable `Min` constrained by the [`number`][ts-number] type, by default of the value captured from the supplied `minimum` indicates the **type** of the [primitive][js-primitive] value of [`Minimum`](#minimum) instance. |

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `minimum: Min`                   | The immutable minimum value of generic type variable `Min` of the [`Minimum`](#minimum) instance being created. Its default value can be set by the static [`set`](#minimumset) and [`value`](#minimumvalue) properties, or static [`setMinimum()`](#minimumsetminimum) method and can be picked by property [`get`](#minimumprototypeget) or [`valueOf()`](#minimumprototypevalueof) method of an [`Minimum`](#minimum) instance. |
| `callback?: ResultCallback<Min>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `minimum` is a [`number`][js-number] type. |

**Returns:**

The **return value** is an instance of [`Minimum`](#minimum).

**Usage:**

```typescript
// Example usage.
import { Minimum } from '@angular-package/range';
import { typeOf } from '@angular-package/type';

// Returns Minimum {27} of type Minimum<27>
const minimum = new Minimum(27);

// Returns Minimum {127} of type Minimum<number>
const minimum1 = new Minimum(Number(127));

// Returns Minimum {NaN} of type Minimum<any>
const minimum2 = new Minimum(String(127) as any);

// Returns Minimum {NaN} of type Minimum<any>
const minimum3 = new Minimum(undefined as any);

// Returns 'minimum'.
typeOf(minimum1);

// Returns 'number'.
typeOf(minimum1.get);

// Returns 'number'.
typeOf(minimum1.valueOf());
```

<br>

### `Minimum` instance public methods

#### `Minimum.prototype.valueOf()`

The [`valueOf()`](#minimumprototypevalueof) method returns the [primitive][js-primitive] value of the generic type variable `Min` of the specified [`Minimum`](#minimum) object.

```typescript
public valueOf(): Min {
  return super.valueOf() as Min;
}
```

**Returns:**

| Returns | Type                  | Description |
| :------ | :-------------------: | :---------- |
| `Min`   | [`number`][ts-number] | A **return type** is a [`number`][ts-classes] of generic type variable `Min`. |

The **return value** is the [`number`][js-number] of the generic type variable `Min`.

**Usage:**

```typescript
// Example usage.
import { Minimum } from '@angular-package/range';

const minimum = new Minimum(27);

// Returns 27 of type 27.
const value = minimum.valueOf();
```

<br>

## `Range`

The [`Range`](#range) object represents a range between a [`number`][js-number] of [minimum](#minimum) and [maximum](#maximum).

<br>

**Static public properties:**

| Range.                 | Description |
| :--------------------- | :---------- |
| [`get`](#rangeget)     | Gets a `MinMax` interface [`object`][js-object] consists of the primitive values of [`Minimum`](#minimum) and/or [`Maximum`](#maximum) instances from the [`Range`](#range) instance if set otherwise returns an empty [`object`][js-object]. |
| [`max`](#rangemax)     | Gets the [primitive][js-primitive] value of the [`Maximum`](#maximum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`min`](#rangemin)     | Gets the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`set`](#rangeset)     | The [`static`][js-static] `set` property **sets** a new instance of [`Range`](#range) from the assigned value of the `MinMax` [`object`][js-object]. |
| [`value`](#rangevalue) | The [`static`][js-static] `value` property of the `MinMax` interface **sets** a new instance of [`Range`](#range) from the assigned value and **returns** an [`object`][js-object] of the `MinMax` interface consists of the [primitive][js-primitive] values of [`Minimum`](#minimum) and/or [`Maximum`](#maximum) instances, from an instance of [`Range`](#range) if set otherwise returns [`undefined`][js-undefined]. |

<br>

**Instance public properties:**

| Range.prototype.            | Description |
| :-------------------------- | :---------- |
| [`get`](#rangeprototypeget) | Gets a `MinMax` interface [`object`][js-object] consisting of the [primitive][js-primitive] values of [`Minimum`](#minimum) and/or [`Maximum`](#maximum) instances if set otherwise returns an empty [`object`][js-object]. |
| [`max`](#rangeprototypemax) | The `max` property of generic type variable `Max` returns the [primitive][js-primitive] value of the [`Maximum`](#maximum) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`min`](#rangeprototypemin) | The `min` property of generic type variable `Min` returns the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance if set otherwise returns [`undefined`][js-undefined]. |

<br>

**Static public methods:**

| Range.                                   | Description |
| :--------------------------------------- | :---------- |
| [`defineMaximum()`](#rangedefinemaximum) | The [`static`][js-static] `defineMaximum()` method **returns** a new instance of [`Maximum`](#maximum) with the provided `max`. |
| [`defineMinimum()`](#rangedefineminimum) | The [`static`][js-static] `defineMinimum()` method **returns** a new instance of [`Minimum`](#minimum) with the provided `min`. |
| [`defineRange()`](#rangedefinerange)     | The [`static`][js-static] `defineRange()` method **returns** a new instance of [`Range`](#range) with the provided `minmax`. |
| [`getMax()`](#rangegetmax)               | The [`static`][js-static] `getMax()` method **gets** the [primitive][js-primitive] value of the [`Maximum`](#maximum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`getMaximum()`](#rangegetmaximum)       | The [`static`][js-static] `getMaximum()` method **gets** an instance of [`Maximum`](#maximum) from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`getMin()`](#rangegetmin)               | The [`static`][js-static] `getMin()` method **gets** the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`getMinimum()`](#rangegetminimum)       | The [`static`][js-static] `getMinimum()` method **gets** an instance of [`Minimum`](#minimum) from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`getRange()`](#rangegetrange)           | The [`static`][js-static] `getRange()` method **gets** an instance of [`Range`](#range) if set otherwise returns [`undefined`][js-undefined]. |
| [`isRange()`](#rangeisrange)             | The [`static`][js-static] `isRange()` method **returns** the result of the check whether the provided `value` is an instance of [`Range`](#range). |
| [`setMaximum()`](#rangesetmaximum)       | The [`static`][js-static] `setMaximum()` method **sets** the [`Maximum`](#maximum) instance with the provided `maximum`. |
| [`setMinimum()`](#rangesetminimum)       | The [`static`][js-static] `setMinimum()` method **sets** the [`Minimum`](#minimum) instance with the provided `minimum`. |
| [`setRange()`](#rangesetrange)           | The [`static`][js-static] `setRange()` method **sets** a new instance of [`Range`](#range) with the provided `MinMax` parameter or stored [primitive][js-primitive] values from the [`Minimum`](#minimum) and a [`Maximum`](#maximum) instances of static [`Range`](#range). |

<br>

**Constructor:**

| Constructor                     | Description |
| :------------------------------ | :---------- |
| [`Range()`](#range-constructor) | Creates a new instance of [`Range`](#range). |

<br>

**Instance public methods:**

| Range.prototype.                            | Description |
| :------------------------------------------ | :---------- |
| [`getMax()`](#rangeprototypegetmax)         | **Gets** the [primitive][js-primitive] value of the [`Maximum`](#maximum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`getMaximum()`](#rangeprototypegetmaximum) | **Gets** the [`Maximum`](#maximum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`getMin()`](#rangeprototypegetmin)         | **Gets** the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`getMinimum()`](#rangeprototypegetminimum) | **Gets** the [`Minimum`](#minimum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined]. |
| [`valueOf()`](#rangeprototypevalueof)       | The `valueOf()` method **returns** an [`object`][js-object] of the `MinMax` interface consists of the primitive values of [`Minimum`](#minimum) and/or [`Maximum`](#maximum) instances if set or an empty [`object`][js-object]. |

<br>

### `Range` static public properties

#### `Range.get`

Gets an [`object`][js-object] of the `MinMax` interface consists of the primitive values of [`Minimum`](#minimum) and/or [`Maximum`](#maximum) instances from the [`Range`](#range) instance if set otherwise returns an empty [`object`][js-object].

```typescript
public static get get(): MinMax<any, any> {
  return this.#range?.get;
}
```

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns undefined of type MinMax<any, any>
Range.get;

// Set the minimum range.
Range.set = { min: 9 };

// Returns {min: 9} of type MinMax<any, any>
Range.get;

// Set the maximum range.
Range.set = { max: 27 };

// Returns {max: 27} of type MinMax<any, any>
Range.get;
```

<br>

#### `Range.max`

Gets the primitive value of the [`Maximum`](#maximum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public static get max(): number {
  return this.#range?.get?.max;
}
```

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

TODO: usage

```

<br>

#### `Range.min`

Gets the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public static get min(): number {
  return this.#range?.get?.min;
}
```

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

TODO: usage

```

<br>

#### `Range.set`

The [`static`][js-static] `set` property **sets** a new instance of [`Range`](#range) from the assigned value of the `MinMax` [`object`][js-object].

```typescript
public static set set(minmax: MinMax<any, any>) {
  this.#range = new Range(minmax);
}
```

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Set the minimum range.
Range.set = { min: 9, max: 27 };

// Returns {max: 27, min: 9} of type MinMax<any, any>
Range.get;
```

<br>

#### `Range.value`

The [`static`][js-static] `value` property of the `MinMax` interface **sets** a new instance of [`Range`](#range) from the assigned value and **returns** an [`object`][js-object] of the `MinMax` interface consists of the [primitive][js-primitive] values of [`Minimum`](#minimum) and/or [`Maximum`](#maximum) instances, from an instance of [`Range`](#range) if set otherwise returns [`undefined`][js-undefined].

```typescript
public static get value(): MinMax<any, any> {
  return this.#range?.valueOf();
}
public static set value(minmax: MinMax<any, any>) {
  this.set = minmax;
}
```

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Set the range with the value property.
Range.value = { min: 9, max: 27 };

// Returns {max: 27, min: 9} of type MinMax<any, any>
Range.value;
```

<br>

### `Range` instance public properties

#### `Range.prototype.get`

Gets a `MinMax` interface [`object`][js-object] consisting of the [primitive][js-primitive] values of [`Minimum`](#minimum) and/or [`Maximum`](#maximum) instances if set otherwise returns an empty [`object`][js-object].

```typescript
public get get(): MinMax<Min, Max> {
  return this.#minmax;
}
```

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns an object {max: 27, min: 9} of MinMax<9, 27> .
new Range({ min: 9, max: 27 }).get;
```

<br>

#### `Range.prototype.max`

The `max` property of generic type variable `Max` returns the [primitive][js-primitive] value of the [`Maximum`](#maximum) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public get max(): Max {
  return this.#maximum?.get;
}
```

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns the primitive value `27` of type 27.
new Range({ min: 9, max: 27 }).max;
```

<br>

#### `Range.prototype.min`

The `min` property of generic type variable `Min` returns the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public get min(): Min {
  return this.#minimum?.get;
}
```

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns the primitive value `9` of type `9`.
new Range({ min: 9, max: 27 }).min;
```

<br>

### `Range` static public methods

#### `Range.defineMaximum()`

The [`static`][js-static] `defineMaximum()` method **returns** a new instance of [`Maximum`](#maximum) with the provided `max`.

```typescript
public static defineMaximum<Max extends number>(
  max: Max,
  callback?: ResultCallback<Max>
): Maximum<Max> {
  return new Maximum(max, callback);
}
```

**Generic type variables:**

| Name  | Default value           | Description |
| :---- | :---------------------: | :---------- |
| `Max` | Captured from the `max` | A generic type variable `Max` constrained by the [`number`][ts-number] type, by default of the value captured from the supplied `max` indicates the **type** of the [primitive][js-primitive] value of [`Maximum`](#maximum) instance via the return type. |

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `max: Max`                       | The **maximum** range of a generic type variable `Max` to create a new instance of [`Maximum`](#maximum). |
| `callback?: ResultCallback<Max>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `max` is a [`number`][js-number] type. |

**Returns:**

| Returns        | Type                  | Description |
| :------------- | :-------------------: | :---------- |
| `Maximum<Max>` | [`class`][ts-classes] | The **return type** is a [`class`][ts-classes] of [`Maximum`](#maximum) that takes the generic type variable `Max`. |

The **return value** is the [`Maximum`](#maximum) instance of the primitive value from the provided `max`.

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns an instance of `Maximum` of type Maximum<27>.
Range.defineMaximum(27);
```

<br>

#### `Range.defineMinimum()`

The [`static`][js-static] `defineMinimum()` method **returns** a new instance of [`Minimum`](#minimum) with the provided `min`.

```typescript
public static defineMinimum<Min extends number>(
  min: Min,
  callback?: ResultCallback<Min>
): Minimum<Min> {
  return new Minimum(min, callback);
}
```

**Generic type variables:**

| Name  | Default value           | Description |
| :---- | :---------------------: | :---------- |
| `Min` | Captured from the `min` | A generic type variable `Min` constrained by the [`number`][ts-number] type, by default of the value captured from the supplied `min` indicates the **type** of the [primitive][js-primitive] value of [`Minimum`](#minimum) instance via the return type. |

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `min: Min`                       | The **minimum** range of a generic type variable `Min` to create a new instance of [`Minimum`](#minimum). |
| `callback?: ResultCallback<Min>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `min` is a [`number`][js-number] type. |

**Returns:**

| Returns        | Type                  | Description |
| :------------- | :-------------------: | :---------- |
| `Minimum<Min>` | [`class`][ts-classes] | The **return type** is a [`class`][ts-classes] of [`Minimum`](#minimum) that takes the generic type variable `Min`. |

The **return value** is the [`Minimum`](#minimum) instance of the primitive value from the provided `min`.

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns an instance of `Minimum` of type Minimum<9>.
Range.defineMinimum(9);
```

<br>

#### `Range.defineRange()`

The [`static`][js-static] `defineRange()` method **returns** a new instance of [`Range`](#range) with the provided `minmax`.

```typescript
public static defineRange<Min extends number, Max extends number>(
  minmax: MinMax<Min, Max>,
  callback?: ResultCallback<MinMax<Min, Max>>
): Range<Min, Max> {
  return new Range(minmax, callback);
}
```

**Generic type variables:**

| Name  | Default value           | Description |
| :---- | :---------------------: | :---------- |
| `Min` | Captured from the `min` | A generic type variable `Min` constrained by the [`number`][ts-number] type, by default of the value captured from the supplied `min` indicates the **type** of the [primitive][js-primitive] value of [`Range`](#range) instance via the return type. |
| `Max` | Captured from the `max` | A generic type variable `Max` constrained by the [`number`][ts-number] type, by default of the value captured from the supplied `max` indicates the **type** of the [primitive][js-primitive] value of [`Range`](#range) instance via the return type. |

**Parameters:**

| Name: type                                    | Description |
| :-------------------------------------------- | :---------- |
| `minmax: MinMax<Min, Max>`                    | The [`object`][js-object] of the `MinMax` interface to create a new instance of [`Range`](#range). |
| `callback?: ResultCallback<MinMax<Min, Max>>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `minmax` is an [`object`][js-object] that contains `min` or `max` property. |

**Returns:**

| Returns           | Type                  | Description |
| :---------------- | :-------------------: | :---------- |
| `Range<Min, Max>` | [`class`][ts-classes] | The **return type** is a [`class`][ts-classes] of [`Range`](#range) that takes the generic type variables `Min` and `Max`. |

The **return value** is a new instance of [`Range`](#range).

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns an instance of `Range` of type Range<9, 27>.
Range.defineRange({ min: 9, max: 27});
```

<br>

#### `Range.getMax()`

The [`static`][js-static] `getMax()` method **gets** the [primitive][js-primitive] value of the [`Maximum`](#maximum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public static getMax<Max extends number>(): Max | undefined {
  return this.#range?.getMax();
}
```

**Generic type variables:**

| Name  | Default value         | Description |
| :---- | :-------------------: | :---------- |
| `Max` | [`number`][ts-number] | A generic type variable `Max` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of [`Maximum`](#maximum) instance via the return type. |

**Returns:**

| Returns | Type                  | Description |
| :------ | :-------------------: | :---------- |
| `Max`   | [`number`][ts-number] | A **return type** is a [`number`][ts-classes] of generic type variable `Max` or [`undefined`][ts-undefined]. |

The **return value** is a maximum value of the [`Range`](#range) of a generic type variable `Max` or [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns undefined of type Maximum<number>.
Range.getMax();

// Sets a maximum range to 27.
Range.setMaximum(27)

// Returns Maximum {27} of type Maximum<number>.
Range.getMax();

// Returns Maximum {27} of type Maximum<27>.
Range.getMax<27>();
```

<br>

#### `Range.getMaximum()`

The [`static`][js-static] `getMaximum()` method **gets** an instance of [`Maximum`](#maximum) from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public static getMaximum<Max extends number>(): Maximum<Max> | undefined {
  return this.#range?.getMaximum();
}
```

**Generic type variables:**

| Name  | Default value         | Description |
| :---- | :-------------------: | :---------- |
| `Max` | [`number`][ts-number] | A generic type variable `Max` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of [`Maximum`](#maximum) instance via the return type. |

**Returns:**

| Returns        | Type                  | Description |
| :------------- | :-------------------: | :---------- |
| `Maximum<Max>` | [`class`][ts-classes] | The **return type** is a [`class`][ts-classes] of [`Maximum`](#maximum) that takes the generic type variable `Max`. |

The **return value** is an instance of [`Maximum`](#maximum) or [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns undefined of type Maximum<number>.
Range.getMaximum();

// Sets a maximum range to 27.
Range.setMaximum(27)

// Returns Maximum {27} of type Maximum<number>.
Range.getMaximum();

// Returns Maximum {27} of type Maximum<27>.
Range.getMaximum<27>();
```

<br>

#### `Range.getMin()`

The [`static`][js-static] `getMin()` method **gets** the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public static getMin<Min extends number>(): Min | undefined {
  return this.#range?.getMin();
}
```

**Generic type variables:**

| Name  | Default value         | Description |
| :---- | :-------------------: | :---------- |
| `Min` | [`number`][ts-number] | A generic type variable `Min` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of [`Minimum`](#minimum) instance via the return type. |

**Returns:**

| Returns | Type                  | Description |
| :------ | :-------------------: | :---------- |
| `Min`   | [`number`][ts-number] | A **return type** is a [`number`][ts-classes] of generic type variable `Min` or [`undefined`][ts-undefined]. |

The **return value** is a minimum value of the [`Range`](#range) of a generic type variable `Min` or [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns undefined of type Minimum<number>.
Range.getMin();

// Sets a minimum range to 9.
Range.setMinimum(9)

// Returns Minimum {9} of type Minimum<number>.
Range.getMin();

// Returns Minimum {9} of type Minimum<9>.
Range.getMin<9>();
```

<br>

#### `Range.getMinimum()`

The [`static`][js-static] `getMinimum()` method **gets** an instance of [`Minimum`](#minimum) from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public static getMinimum<Min extends number>(): Minimum<Min> | undefined {
  return this.#range?.getMinimum();
}
```

**Generic type variables:**

| Name  | Default value         | Description |
| :---- | :-------------------: | :---------- |
| `Min` | [`number`][ts-number] | A generic type variable `Min` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of [`Minimum`](#minimum) instance via the return type. |

**Returns:**

| Returns        | Type                  | Description |
| :------------- | :-------------------: | :---------- |
| `Minimum<Min>` | [`class`][ts-classes] | The **return type** is a [`class`][ts-classes] of [`Minimum`](#minimum) that takes the generic type variable `Min` or [`undefined`][ts-undefined]. |

The **return value** is an instance of [`Minimum`](#minimum) or [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns undefined of type Minimum<number>.
Range.getMinimum();

// Sets a minimum range to 9.
Range.setMinimum(9)

// Returns Minimum {9} of type Minimum<number>.
Range.getMinimum();

// Returns Minimum {9} of type Minimum<9>.
Range.getMinimum<9>();
```

<br>

#### `Range.getRange()`

The [`static`][js-static] `getRange()` method **gets** an instance of [`Range`](#range) if set otherwise returns [`undefined`][js-undefined].

```typescript
public static getRange<Min extends number, Max extends number>(): Range<
  Min,
  Max
> {
  return this.#range;
}
```

**Generic type variables:**

| Name  | Default value         | Description |
| :---- | :-------------------: | :---------- |
| `Max` | [`number`][ts-number] | A generic type variable `Max` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of [`Range`](#range) instance via the return type. |
| `Min` | [`number`][ts-number] | A generic type variable `Min` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of [`Range`](#range) instance via the return type. |

**Returns:**

| Returns           | Type                  | Description |
| :---------------- | :-------------------: | :---------- |
| `Range<Min, Max>` | [`class`][ts-classes] | The **return type** is a [`class`][ts-classes] of [`Range`](#range) that takes the generic type variables `Min` and `Max` or [`undefined`][ts-undefined]. |

The **return value** is an instance of [`Range`](#range) or [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns undefined of type Range<number, number>.
Range.getRange();

// Set a range.
Range.setRange({ min: 9, max: 27 });

// Returns Range {max: 27, min: 9} of type Range<number, number>.
Range.getRange();

// Returns Range {max: 27, min: 9} of type Range<9, 27>.
Range.getRange<9, 27>();
```

<br>

#### `Range.isRange()`

The [`static`][js-static] `isRange()` method **returns** the result of the check whether the provided `value` is an instance of [`Range`](#range).

```typescript
public static isRange<Min extends number, Max extends number>(
  value: any,
  callback?: ResultCallback<any>
): value is Range<Min, Max> {
  return isInstance(value, Range, callback);
}
```

**Generic type variables:**

| Name  | Default value         | Description |
| :---- | :-------------------: | :---------- |
| `Max` | [`number`][ts-number] | A generic type variable `Max` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of the [`Range`](#range) instance via the return type `value is Range<Min, Max>`. |
| `Min` | [`number`][ts-number] | A generic type variable `Min` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of the [`Range`](#range) instance via the return type `value is Range<Min, Max>`. |

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `value: any`                     | The value of [`any`][ts-any] type to test against the [`Range`](#range) instance. |
| `callback?: ResultCallback<any>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `value` is an instance of [`Range`](#range). |

**Returns:**

| Returns                    | Type                    | Description |
| :------------------------- | :---------------------: | :---------- |
| `value is Range<Min, Max>` | [`boolean`][ts-boolean] | The **return type** is a [`boolean`][ts-boolean] indicating the `value` is a [`class`][ts-classes] of [`Range`](#range) that takes the generic type variables `Min` and `Max`. |

The **return value** is a [`boolean`][js-boolean] indicating whether the provided `value` is an instance of [`Range`](#range).

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns true.
Maximum.isRange(new Maximum(27));

const value: any = new Maximum(27);

// Returns true.
if (Maximum.isMaximum<27>(value)) {
  // Returns Maximum {27} of type Maximum<27>
  value;
}
```

<br>

#### `Range.setMaximum()`

The [`static`][js-static] `setMaximum()` method **sets** the [`Maximum`](#maximum) instance with the provided `maximum`.

```typescript
public static setMaximum<Max extends number>(
  max: Max,
  callback?: ResultCallback<Max>
): typeof Range {
  this.setRange({ max }, callback as any);
  return this;
}
```

**Generic type variables:**

| Name  | Default value                    | Description |
| :---- | :------------------------------: | :---------- |
| `Max` | Captured from the supplied `max` | A generic type variable `Max` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of the `max` parameter and `value` parameter of the supplied [`ResultCallback`][package-callback-resultcallback] function. |

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `max: Max`                       | The maximum range of a generic type variable `Max` to create a new instance of [`Maximum`](#maximum). |
| `callback?: ResultCallback<Max>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `max` is a [`number`][js-number] type. |

**Returns:**

| Returns        | Type                  | Description |
| :------------- | :-------------------: | :---------- |
| `typeof Range` | [`class`][ts-classes] | The **return type** is  a [`class`][ts-classes] of static [`Range`](#range). |

The **return value** is a static [`Range`](#range).

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Set a maximum range.
Range.setMaximum(27);

// Returns Maximum 27 of type Maximum<number>
Range.getMaximum();

// Returns Maximum 27 of type Maximum<27>
Range.getMaximum<27>();
```

<br>

#### `Range.setMinimum()`

The [`static`][js-static] `setMinimum()` method **sets** the [`Minimum`](#minimum) instance with the provided `minimum`.

```typescript
public static setMinimum<Min extends number>(
  min: Min,
  callback?: ResultCallback<Min>
): typeof Range {
  this.setRange({ min }, callback as any);
  return this;
}
```

**Generic type variables:**

| Name  | Default value                    | Description |
| :---- | :------------------------------: | :---------- |
| `Min` | Captured from the supplied `min` | A generic type variable `Min` constrained by the [`number`][ts-number] type indicates the **type** of the [primitive][js-primitive] value of the `min` parameter and `value` parameter of the supplied [`ResultCallback`][package-callback-resultcallback] function. |

**Parameters:**

| Name: type                       | Description |
| :------------------------------- | :---------- |
| `min: Min`                       | The minimum range of a generic type variable `Min` to create a new instance of [`Minimum`](#minimum).|
| `callback?: ResultCallback<Min>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `min` is a [`number`][js-number] type. |

**Returns:**

| Returns        | Type                  | Description |
| :------------- | :-------------------: | :---------- |
| `typeof Range` | [`class`][ts-classes] | The **return type** is  a [`class`][ts-classes] of static [`Range`](#range). |

The **return value** is a static [`Range`](#range).

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Set a minimum range.
Range.setMinimum(9);

// Returns Minimum 9 of type Minimum<number>
Range.getMinimum();

// Returns Minimum 9 of type Minimum<9>
Range.getMinimum<9>();
```

<br>

#### `Range.setRange()`

The [`static`][js-static] `setRange()` method **sets** a new instance of [`Range`](#range) with the provided `MinMax` parameter or stored [primitive][js-primitive] values from the [`Minimum`](#minimum) and a [`Maximum`](#maximum) instances of static [`Range`](#range).

```typescript
public static setRange<Min extends number, Max extends number>(
  minmax: MinMax<Min, Max> = {},
  callback?: ResultCallback<MinMax<Min, Max>>
): typeof Range {
  this.#range = new Range(
    {
      ...{
        max: this.#range?.max,
        min: this.#range?.min,
      },
      ...minmax,
    },
    callback
  );
  return this;
}
```

**Generic type variables:**

| Name  | Default value                       | Description |
| :---- | :---------------------------------: | :---------- |
| `Min` | Captured from the `min` of `minmax` | A generic type variable `Min` constrained by the [`number`][ts-number] type, by default of the value captured from the `min` property of supplied `minmax` parameter indicates the **type** of its `MinMax` interface. |
| `Max` | Captured from the `max` of `minmax` | A generic type variable `Max` constrained by the [`number`][ts-number] type, by default of the value captured from the `max` property of supplied `minmax` parameter indicates the **type** of its `MinMax` interface. |

**Parameters:**

| Name: type                                    | Description |
| :-------------------------------------------- | :---------- |
| `minmax: MinMax<Min, Max>`                    | The [`object`][js-object] of the `MinMax` interface to create a new instance of [`Range`](#range), by default its value is picked from stored [`Minimum`](#minimum) and [`Maximum`](#maximum) of static [`Range`](#range). |
| `callback?: ResultCallback<MinMax<Min, Max>>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `minmax` is an [`object`][js-object] that contains `min` or `max` property. |

**Returns:**

| Returns        | Type                  | Description |
| :------------- | :-------------------: | :---------- |
| `typeof Range` | [`class`][ts-classes] | The **return type** is  a [`class`][ts-classes] of static [`Range`](#range). |

The **return value** is a static [`Range`](#range).

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Set a range.
Range.setRange({min: 9, max: 27});

// Returns an instance of `Range` of type Range<9, 27>
Range.getRange<9, 27>();
```

<br>

### `Range` constructor

#### `Range()`

Creates a new instance of [`Range`](#range).

```typescript
constructor(
  range: MinMax<Min, Max> = {},
  callback?: ResultCallback<MinMax<Min, Max>>
) {
  guardObjectSomeKeys(range, ['max', 'min'], callback) &&
    (isDefined(range.max) &&
      (this.#maximum = new Maximum<Max>(range?.max as Max)),
    isDefined(range.min) &&
      (this.#minimum = new Minimum<Min>(range?.min as Min)));
}
```

**Parameters:**

| Name: type                                    | Description |
| :-------------------------------------------- | :---------- |
| `minmax: MinMax<Min, Max>`                    | The **required** [`object`][js-object] of optional `min` and `max` properties. |
| `callback?: ResultCallback<MinMax<Min, Max>>` | An optional callback [`function`][js-function] of the [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `minmax` is an [`object`][js-object] that contains `min` or `max` property. |

**Returns:**

The **return value** is a new instance of [`Range`](#range).

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns an instance of Range<9, 27>
new Range({ min: 9, max: 27}, (result, value, payload) => {
  result // true
  value // {min: 9, max: 27}
  payload //{keys: Array(2)} keys: (2) ['max', 'min']
  return result;
});
```

<br>

### `Range` instance public methods

#### `Range.prototype.getMax()`

**Gets** the [primitive][js-primitive] value of the [`Maximum`](#maximum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public getMax(): Max | undefined {
  return this.#maximum?.get;
}
```

**Returns:**

| Returns            | Type                  | Description |
| :----------------- | :-------------------: | :---------- |
| `Max \| undefined` | [`number`][ts-number] | A **return type** is a [`number`][ts-number] of generic type variable `Max` or [`undefined`][ts-undefined]. |

The **return value** is a maximum value of the [`Range`](#range) of a generic type variable `Max` or [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns the primitive value `27` of type `27`.
new Range({ min: 9, max: 27}, (result, value, payload) => {
  result // true
  value // {min: 9, max: 27}
  payload // {keys: Array(2)} keys: (2) ['max', 'min']
  return result;
}).getMax();
```

<br>

#### `Range.prototype.getMaximum()`

**Gets** the [`Maximum`](#maximum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public getMaximum(): Maximum<Max> | undefined {
  return this.#maximum;
}
```

**Returns:**

| Returns                     | Type                  | Description |
| :-------------------------- | :-------------------: | :---------- |
| `Maximum<Max> \| undefined` | [`class`][ts-classes] | The **return type** is a [`class`][ts-classes] of [`Maximum`](#maximum) that takes the generic type variable `Max` or [`undefined`][ts-undefined]. |

The **return value** is an instance of [`Maximum`](#maximum) or [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns an instance of `Maximum` of type `Maximum<27>`.
new Range({ min: 9, max: 27}, (result, value, payload) => {
  result // true
  value // {min: 9, max: 27}
  payload // {keys: Array(2)} keys: (2) ['max', 'min']
  return result;
}).getMaximum();
```

<br>

#### `Range.prototype.getMin()`

**Gets** the [primitive][js-primitive] value of the [`Minimum`](#minimum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public getMin(): Min | undefined {
  return this.#minimum?.get;
}
```

**Returns:**

| Returns            | Type                  | Description |
| :----------------- | :-------------------: | :---------- |
| `Min \| undefined` | [`number`][ts-number] | A **return type** is a [`number`][ts-number] of generic type variable `Min` or [`undefined`][ts-undefined]. |

The **return value** is a minimum value of the [`Range`](#range) of a generic type variable `Min` or [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns the primitive value `9` of type `9`.
new Range({ min: 9, max: 27}, (result, value, payload) => {
  result // true
  value // {min: 9, max: 27}
  payload // {keys: Array(2)} keys: (2) ['max', 'min']
  return result;
}).getMin();
```

<br>

#### `Range.prototype.getMinimum()`

**Gets** the [`Minimum`](#minimum) instance from the [`Range`](#range) instance if set otherwise returns [`undefined`][js-undefined].

```typescript
public getMinimum(): Minimum<Min> | undefined {
  return this.#minimum;
}
```

**Returns:**

| Returns                     | Type                  | Description |
| :-------------------------- | :-------------------: | :---------- |
| `Minimum<Min> \| undefined` | [`class`][ts-classes] | The **return type** is a [`class`][ts-classes] of [`Minimum`](#minimum) that takes the generic type variable `Min` or [`undefined`][ts-undefined]. |

The **return value** is an instance of [`Minimum`](#minimum) or [`undefined`][js-undefined].

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns an instance of `Minimum` of type `Minimum<9>`.
new Range({ min: 9, max: 27}, (result, value, payload) => {
  result // true
  value // {min: 9, max: 27}
  payload // {keys: Array(2)} keys: (2) ['max', 'min']
  return result;
}).getMinimum();
```

<br>

#### `Range.prototype.valueOf()`

The `valueOf()` method **returns** an [`object`][js-object] of the `MinMax` interface consists of the primitive values of [`Minimum`](#minimum) and/or [`Maximum`](#maximum) instances if set or an empty [`object`][js-object].

```typescript
public valueOf(): MinMax<Min, Max> {
  return this.#get;
}
```

**Returns:**

| Returns            | Type                  | Description |
| :----------------- | :-------------------: | :---------- |
| `MinMax<Min, Max>` | [`object`][ts-object] | The **return type** is an [`object`][ts-object] of [`MinMax`][package-type-minmax] interface that takes the generic type variables `Min` and `Max`. |

The **return value** is an [`object`][js-object] consists of the [primitive][js-primitive] values of [`Minimum`](#minimum) and/or [`Maximum`](#maximum) instances or an empty [`object`][js-object].

**Usage:**

```typescript
// Example usage.
import { Range } from '@angular-package/range';

// Returns an object {max: 27, min: 9} of type `MinMax<9, 27>`.
new Range({ min: 9, max: 27}, (result, value, payload) => {
  result // true
  value // {min: 9, max: 27}
  payload // {keys: Array(2)} keys: (2) ['max', 'min']
  return result;
}).valueOf();
```

<br>

## Changelog

The **changelog** of this package is based on [*keep a changelog*](https://keepachangelog.com/en/1.0.0/). To read it, click on the [CHANGELOG.md](https://github.com/angular-package/range/blob/main/CHANGELOG.md) link.

> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project. - [*keep a changelog*](https://keepachangelog.com/en/1.0.0/)

<br>

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license][range-license])

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsciborrudnicki%26type%3Dpatrons&style=flat
[patreon-link]: https://patreon.com/sciborrudnicki

[angulario]: https://angular.io
[skeleton]: https://github.com/angular-package/skeleton

<!-- Update status -->
[experimental]: https://img.shields.io/badge/-experimental-orange
[fix]: https://img.shields.io/badge/-fix-red
[new]: https://img.shields.io/badge/-new-green
[update]: https://img.shields.io/badge/-update-red

<!-- Gitter -->
[gitter-badge]: https://badges.gitter.im/angularpackage/Lobby.svg
[gitter-chat]: https://gitter.im/angularpackage/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/

<!-- This package: range  -->
  <!-- GitHub: badges -->
  [range-badge-issues]: https://img.shields.io/github/issues/angular-package/range
  [range-badge-forks]: https://img.shields.io/github/forks/angular-package/range
  [range-badge-stars]: https://img.shields.io/github/stars/angular-package/range
  [range-badge-license]: https://img.shields.io/github/license/angular-package/range
  <!-- GitHub: badges links -->
  [range-issues]: https://github.com/angular-package/range/issues
  [range-forks]: https://github.com/angular-package/range/network
  [range-license]: https://github.com/angular-package/range/blob/master/LICENSE
  [range-stars]: https://github.com/angular-package/range/stargazers
<!-- This package -->
  [range-github-changelog]: https://github.com/angular-package/range/blob/main/CHANGELOG.md

<!-- Package: callback -->
  <!-- npm -->
  [callback-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcallback.svg
  [callback-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcallback.png
  [callback-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcallback
  [callback-npm-readme]: https://www.npmjs.com/package/@angular-package/callback#readme

  <!-- GitHub -->
  [callback-github-readme]: https://github.com/angular-package/callback#readme

  [package-callback-resultcallback]: https://github.com/angular-package/callback#resultcallback

<!-- Package: change-detection -->
  <!-- npm -->
  [cd-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg
  [cd-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.png
  [cd-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fchange-detection
  [cd-npm-readme]: https://www.npmjs.com/package/@angular-package/change-detection#readme

  <!-- GitHub -->
  [cd-github-readme]: https://github.com/angular-package/change-detection#readme

<!-- Package: component-loader -->
  <!-- npm -->
  [cl-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.svg
  [cl-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.png
  [cl-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader
  [cl-npm-readme]: https://www.npmjs.com/package/@angular-package/component-loader#readme

  <!-- GitHub -->
  [cl-github-readme]: https://github.com/angular-package/component-loader#readme

<!-- Package: core -->
  <!-- npm -->
  [core-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcore.svg
  [core-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcore.png
  [core-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcore
  [core-npm-readme]: https://www.npmjs.com/package/@angular-package/core#readme

  <!-- GitHub -->
  [core-github-readme]: https://github.com/angular-package/core#readme

<!-- Package: error -->
  <!-- npm -->
  [error-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ferror.svg
  [error-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ferror.png
  [error-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ferror
  [error-npm-readme]: https://www.npmjs.com/package/@angular-package/error#readme

  <!-- GitHub -->
  [error-github-readme]: https://github.com/angular-package/error#readme

<!-- Package: name -->
  <!-- npm -->
  [name-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fname.svg
  [name-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fname.png
  [name-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fname
  [name-npm-readme]: https://www.npmjs.com/package/@angular-package/name#readme

  <!-- GitHub -->
  [name-github-readme]: https://github.com/angular-package/name#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Freactive.png
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: prism -->
  <!-- npm -->
  [prism-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fprism.svg
  [prism-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fprism.png
  [prism-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fprism
  [prism-npm-readme]: https://www.npmjs.com/package/@angular-package/prism#readme

  <!-- GitHub -->
  [prism-github-readme]: https://github.com/angular-package/prism#readme

<!-- Package: property -->
  <!-- npm -->
  [property-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fproperty.svg
  [property-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fproperty.png
  [property-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fproperty
  [property-npm-readme]: https://www.npmjs.com/package/@angular-package/property#readme

  <!-- GitHub -->
  [property-github-readme]: https://github.com/angular-package/property#readme

<!-- Package: range -->
  <!-- npm -->
  [range-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Frange.svg
  [range-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Frange.png
  [range-npm-badge]: https://badge.fury.io/js/%40angular-package%2Frange
  [range-npm-readme]: https://www.npmjs.com/package/@angular-package/range#readme

  <!-- GitHub -->
  [range-github-readme]: https://github.com/angular-package/range#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Freactive.png
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: storage -->
  <!-- npm -->
  [storage-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fstorage.svg
  [storage-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fstorage.png
  [storage-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fstorage
  [storage-npm-readme]: https://www.npmjs.com/package/@angular-package/storage#readme

  <!-- GitHub -->
  [storage-github-readme]: https://github.com/angular-package/storage#readme

<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftesting.png
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftype.png
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

  [package-type-key]: https://github.com/angular-package/type#key
  [package-type-minmax]: https://github.com/angular-package/type#minmax
  [package-type-resultcallback]: https://github.com/angular-package/type#resultcallback
  [package-type-type]: https://github.com/angular-package/type#type
  [package-type-types]: https://github.com/angular-package/type#types
  [package-type-valueparser]: https://github.com/angular-package/type#valueparser

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fui
  [ui-npm-readme]: https://www.npmjs.com/package/@angular-package/ui#readme

  <!-- GitHub -->
  [ui-github-readme]: https://github.com/angular-package/ui#readme

<!-- Angular -->
[angular-component-factory-resolver]: https://angular.io/api/core/ComponentFactoryResolver
[angular-view-container-ref]: https://angular.io/api/core/ViewContainerRef

<!-- Jasmine -->
[jasmine-describe]: https://jasmine.github.io/api/3.8/global.html#describe
[jasmine-expect]: https://jasmine.github.io/api/3.8/global.html#expect
[jasmine-it]: https://jasmine.github.io/api/3.8/global.html#it

<!-- Javascript  -->
[js-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[js-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[js-array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

[js-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[js-bigintconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt

[js-boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[js-booleanconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean

[js-classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[js-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

[js-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[js-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[js-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

[js-getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[js-object-getownpropertydescriptor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
[js-object-getOwnpropertydescriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

[js-setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

[js-hasownproperty]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

[js-instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[js-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

[js-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[js-null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number

[js-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[js-object-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

[js-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[js-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[js-rangeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[js-referenceerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[js-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[js-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[js-static]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
[js-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[js-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[js-stringconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String

[js-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[js-symbolconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
[js-syntaxerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[js-typeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[js-undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[js-urlerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[js-weakset]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

<!-- Karma -->
[karma]: http://karma-runner.github.io/0.10/index.html

<!-- Prism -->
[prism-js]: https://prismjs.com/

<!-- Typescript -->
[ts-any]: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
[ts-boolean]: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-enums]: https://www.typescriptlang.org/docs/handbook/enums.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
[ts-never]: https://www.typescriptlang.org/docs/handbook/basic-types.html#never
[ts-null]: https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined
[ts-number]: https://www.typescriptlang.org/docs/handbook/basic-types.html#number
[ts-object]: https://www.typescriptlang.org/docs/handbook/basic-types.html#object
[ts-string]: https://www.typescriptlang.org/docs/handbook/basic-types.html#string
[ts-undefined]: https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined
[ts-unknown]: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown