# Introduction

A 2D vector math module written in TypeScript (work in progress).

[Source](https://github.com/tommccracken/vector-2d)

The MIT License (Copyright 2020 Thomas O. McCracken)

# Usage

## Installation

[TBA once package prepared]

## API

Refer to the [Vector2d](https://tommccracken.github.io/vector-2d/classes/_mod_.vector2d.html) class documentation.

## Basic examples

Import the library

[TBA once package prepared]

Create a vector with x and y component values of 1.5 and 3 respectively.

```javascript
let vector1 = new Vector2D(1.5, 3);
```

Get the length of the vector

```javascript
let length = vector1.getLength();
```

Get a normal vector for vector1

```javascript
let normalVector = vector1.normalVector();
```

Create a second vector and add it to the first vector.

```javascript
let vector2 = new Vector2D(-1, 5);
let vector3 = vector1.add(vector2);
```

*Note: This is an immutable addition operation as vector1 and vector2 will not be not modified. The result will be returned as a new Vector2D object.*

Perform a mutable addition

```javascript
vector1.mutableAdd(vector2);
```

*Note: In this case the result of the addition operation will be stored in the original Vector2D object vector1.*

Calculate the dot and cross products of vector1 and vector2

```javascript
let dotProduct = vector1.getDotProduct(vector2);
let crossProduct = vector1.getCrossProduct(vector2);
```

Print vector1 as a string

```javascript
console.log(vector1.toString());
```
