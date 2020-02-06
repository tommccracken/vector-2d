/*
 *
 * vector-2d - A 2D vector math module written in TypeScript - Testing code - https://github.com/tommccracken/vector-2d
 *
 * Copyright 2020 Thomas O. McCracken
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

const Vector2D = require("../dist/mod").Vector2D;
const assert = require('assert');
const EPSILON = 0.000000001;

describe('Vector constructor', function () {
  let x = 1.5;
  let y = -2.5;
  let v = new Vector2D(x, y);
  it('Check x component', function () {
    assert.equal(v.x, x);
  });
  it('Check y component', function () {
    assert.equal(v.y, y);
  });
});

describe('Vector get attribute methods', function () {
  let x = -2;
  let y = 5.2;
  let v = new Vector2D(x, y);
  describe('getX method', function () {
    it('Check x component', function () {
      assert.equal(v.getX(), x);
    });
  });
  describe('getY method', function () {
    it('Check y component', function () {
      assert.equal(v.getY(), y);
    });
  });
  describe('getLength method', function () {
    let length = Math.sqrt(x * x + y * y);
    it('Check length', function () {
      assert.equal(v.getLength(), length);
    });
  });
  describe('geLengthSquared method', function () {
    let lengthSquared = x * x + y * y;
    it('Check length squared', function () {
      assert.equal(v.getLengthSquared(), lengthSquared);
    });
  });
  describe('getAngle method', function () {
    let angle = Math.atan(y / x);
    it('Check angle', function () {
      assert.equal(v.getAngle(), angle);
    });
  });
});

describe('Vector mutable operations methods', function () {
  describe('mutableUnitVector method', function () {
    let x = 2.2;
    let y = -4;
    let v = new Vector2D(x, y);
    it('Check unit vector', function () {
      v.mutableUnitVector();
      assert.equal((v.getLength() - EPSILON) < 1 && (v.getLength() + EPSILON) > 1, true);
    });
  });
  describe('mutableNormalVector method', function () {
    let x = 2.2;
    let y = -4;
    let v = new Vector2D(x, y);
    it('Check normal vector', function () {
      v.mutableNormalVector();
      assert.equal(v.x === -y && v.y === x, true);
    });
  });
  describe('mutableAddVector method', function () {
    let x = 2.2;
    let y = -4;
    let x2 = 200;
    let y2 = 12;
    let v = new Vector2D(x, y);
    let v2 = new Vector2D(0, 0);
    let v3 = new Vector2D(x2, y2);
    it('Check mutable add operation', function () {
      v.mutableAdd(v2);
      assert.equal(v.x === x && v.y === y, true);
      v.mutableAdd(v3);
      assert.equal(v.x === (x + x2) && v.y === (y + y2), true);
    });
  });
  describe('mutableSubtractVector method', function () {
    let x = 2.2;
    let y = -4;
    let x2 = 200;
    let y2 = 12;
    let v = new Vector2D(x, y);
    let v2 = new Vector2D(0, 0);
    let v3 = new Vector2D(x2, y2);
    it('Check mutable subtract operation', function () {
      v.mutableSubtract(v2);
      assert.equal(v.x === x && v.y === y, true);
      v.mutableSubtract(v3);
      assert.equal(v.x === (x - x2) && v.y === (y - y2), true);
    });
  });
  describe('mutableScaleVector method', function () {
    let x = 2.2;
    let y = -4;
    let v = new Vector2D(x, y);
    let scalar = 1.0;
    let scalar2 = 3.1416;
    it('Check mutable scale operation', function () {
      v.mutableScale(scalar);
      assert.equal(v.x === x && v.y === y, true);
      v.mutableScale(scalar2);
      assert.equal(v.x === (x * scalar2) && v.y === (y * scalar2), true);
    });
  });
});

describe('Vector immutable operations methods', function () {
  describe('scale method', function () {
    let x = 2;
    let y = -2;
    let v = new Vector2D(x, y);
    let length = v.getLength();
    let scale = 12;
    let v2 = v.scale(scale);
    it('Check length', function () {
      assert.equal(Math.abs(v2.getLength() - length * scale) < EPSILON, true);
    });
  });
  describe('unitVector method', function () {
    let x = 2;
    let y = -2;
    let v = new Vector2D(x, y);
    let v2 = v.unitVector();
    it('Check length', function () {
      assert.equal(Math.abs(v2.getLength() - 1) < EPSILON, true);
    });
  });
  describe('normalVector method', function () {
    let x = 2;
    let y = -2;
    let v = new Vector2D(x, y);
    let v2 = v.normalVector();
    it('Check components', function () {
      assert.equal(v2.x, -y);
      assert.equal(v2.y, x);
    });
  });
  describe('add method', function () {
    let x = 2;
    let y = -2;
    let v = new Vector2D(x, y);
    let x2 = 6;
    let y2 = -1.5;
    let v2 = new Vector2D(x2, y2);
    let v3 = v.add(v2);
    it('Check components', function () {
      assert.equal(v3.x, x + x2);
      assert.equal(v3.y, y + y2);
    });
  });
  describe('subtract method', function () {
    let x = 2;
    let y = -2;
    let v = new Vector2D(x, y);
    let x2 = 6;
    let y2 = -1.5;
    let v2 = new Vector2D(x2, y2);
    let v3 = v.subtract(v2);
    it('Check components', function () {
      assert.equal(v3.x, x - x2);
      assert.equal(v3.y, y - y2);
    });
  });
});

describe('Vector other methods', function () {
  describe('getDotProduct method', function () {
    let x = 2;
    let y = -2;
    let v = new Vector2D(x, y);
    let x2 = 6;
    let y2 = -1.5;
    let v2 = new Vector2D(x2, y2);
    let result = v.getDotProduct(v2);
    it('Check result', function () {
      assert.equal(result, x * x2 + y * y2);
    });
  });
  describe('getCrossProduct method', function () {
    let x = 2;
    let y = -2;
    let v = new Vector2D(x, y);
    let x2 = 6;
    let y2 = -1.5;
    let v2 = new Vector2D(x2, y2);
    let result = v.getCrossProduct(v2);
    it('Check result', function () {
      assert.equal(result, x * y2 - y * x2);
    });
  });
  describe('getDistanceFromSquared method', function () {
    let x = 2;
    let y = -2;
    let v = new Vector2D(x, y);
    let x2 = 6;
    let y2 = -1.5;
    let v2 = new Vector2D(x2, y2);
    let result = v.getDistanceFromSquared(v2);
    if ('Check distance squared', function () {
      assert.equal(result, (x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));
    });
  });
  describe('getDistanceFrom', function () {
    let x = 2;
    let y = -2;
    let v = new Vector2D(x, y);
    let x2 = 6;
    let y2 = -1.5;
    let v2 = new Vector2D(x2, y2);
    let result = v.getDistanceFrom(v2);
    if ('Check distance', function () {
      assert.equal(result, Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)));
    });
  });
  describe('getAngleBetween', function () {
    let x = 2;
    let y = -2;
    let v = new Vector2D(x, y);
    let x2 = 3;
    let y2 = 3;
    let v2 = new Vector2D(x2, y2);
    let result = v.getAngleBetween(v2);
    it('Check angle', function () {
      assert.equal(result, Math.atan((y2) / (x2)) - Math.atan((y) / (x)));
      assert.equal(result, Math.PI / 2);
    });
  });
});

describe('Set vector methods', function () {
  describe('setX method', function () {
    let x = 1;
    let y = -1;
    let v = new Vector2D(x, y);
    let x2 = 10;
    v.setX(x2);
    it('Check x', function () {
      assert.equal(v.x, x2);
    });
  });
  describe('setY method', function () {
    let x = 1;
    let y = -1;
    let v = new Vector2D(x, y);
    let y2 = 10;
    v.setY(y2);
    it('Check y', function () {
      assert.equal(v.y, y2);
    });
  });
  describe('setFromVector method', function () {
    let x = 1;
    let y = -1;
    let v = new Vector2D(x, y);
    let x2 = 100;
    let y2 = 10;
    let v2 = new Vector2D(x2, y2);
    v.setFromVector(v2);
    it('Check vector components', function () {
      assert.equal(v.x, v2.x);
      assert.equal(v.y, v2.y);
    });
  });
  describe('setFromComponents method', function () {
    let x = 1;
    let y = -1;
    let v = new Vector2D(x, y);
    let x2 = 100;
    let y2 = 10;
    v.setFromComponents(x2, y2);
    it('Check vector components', function () {
      assert.equal(v.x, x2);
      assert.equal(v.y, y2);
    });
  });
  describe('setToZero method', function () {
    let x = 1;
    let y = -1;
    let v = new Vector2D(x, y);
    v.setToZero();
    it('Check vector components', function () {
      assert.equal(v.x, 0);
      assert.equal(v.y, 0);
    });
  });
  describe('setToLength method', function () {
    let x = 2;
    let y = 200;
    let v = new Vector2D(x, y);
    let length = 80;
    v.setLength(length);
    it('Check vector length', function () {
      assert.equal(Math.abs(v.getLength() - length) < EPSILON, true);
    });
  });
  describe('setToAngle method', function () {
    let x = 70;
    let y = 200;
    let v = new Vector2D(x, y);
    let angle = 1.5;
    v.setAngle(angle);
    it('Check vector angle', function () {
      assert.equal(Math.abs(v.getAngle() - angle) < EPSILON, true);
    });
  });
});

describe('Vector utility methods', function () {
  let x = 50;
  let y = -0.5;
  let v = new Vector2D(x, y);
  describe('toString method', function () {
    it('Check string', function () {
      assert.equal(v.toString(), '(' + x + ', ' + y + ')');
    });
  });
  describe('toJSON method', function () {
    it('Check x component', function () {
      assert.equal(v.toJSON().x, x);
    });
    it('Check y component', function () {
      assert.equal(v.toJSON().y, y);
    });
    it('Check JSON object', function () {
      assert.deepStrictEqual(v.toJSON(), { "x": x, "y": y });
    });
  });
  describe('clone method', function () {
    it('Check cloned vector', function () {
      let v2 = v.clone();
      assert.deepStrictEqual(v, v2);
    });
  });
  describe('isZero method', function () {
    it('Check if zero returns false', function () {
      assert.equal(v.isZero(), false);
    });
    let v2 = new Vector2D(0, 0.0);
    it('Check if zero returns false', function () {
      assert.equal(v2.isZero(), true);
    });
  });
  describe('isEqual method', function () {
    let x = 1.5;
    let y = -1;
    let v = new Vector2D(x, y);
    let x2 = 1.5;
    let y2 = -1;
    let v2 = new Vector2D(x2, y2);
    let x3 = 1.5;
    let y3 = 6;
    let v3 = new Vector2D(x3, y3);
    it('Check if equal', function () {
      assert.equal(v.isEqual(v2), true);
      assert.equal(v.isEqual(v3), false);
    });
  });
});
