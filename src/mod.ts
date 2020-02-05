/*
 *
 * vector-2d - A 2D vector math module written in TypeScript - https://github.com/tommccracken/vector-2d
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


/**
 * The 2D vector class.
 */
export class Vector2D {

    /**
     * The 'x' component of the vector
     */
    private x: number;

    /**
     * The 'y' component of the vector
     */
    private y: number;

    /** 
     * @param x The 'x' component of the vector
     * @param y The 'y' component of the vector
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Get the 'x' component of this vector
     * @category Get Vector Attribute
     */
    getX() {
        return this.x;
    }

    /**
     * Get the 'y' component of this vector
     * @category Get Vector Attribute
     */
    getY() {
        return this.y;
    }

    /**
     * Get the square of the length of this vector
     * @category Get Vector Attribute
     */
    getLengthSquared() {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * Get the length of this vector
     * @category Get Vector Attribute
     */
    getLength() {
        return Math.sqrt(this.getLengthSquared());
    }

    /**
     * Get the angle in radians of this vector (relative to the origin)
     * @category Get Vector Attribute
     */
    getAngle() { // Todo, test for a zero length vector
        return Math.atan(this.y / this.x);
    }

    /**
     * Get the square of the scalar distance of this vector from another vector
     * @param v The other vector
     * @category Other
     */
    getDistanceFromSquared(v: Vector2D) {
        return (v.x - this.x) * (v.x - this.x) + (v.y - this.y) * (v.y - this.y);
    }

    /**
     * Get the scalar distance of this vector from another vector
     * @param v The other vector
     * @category Other
     */
    getDistanceFrom(v: Vector2D) {
        return Math.sqrt(this.getDistanceFromSquared(v));
    }

    /**
     * Get the angle of another vector from this vector
     * @param v The other vector
     * @category Other
     */
    getAngleBetween(v: Vector2D) {
        return Math.atan2(this.getCrossProduct(v), this.getDotProduct(v));
    }

    /**
     * Get the dot product of this vector and another vector
     * @param v The other vector
     * @category Other
     */
    getDotProduct(v: Vector2D) {
        return this.x * v.x + this.y * v.y;
    }

    /**
     * Get the cross product of this vector and another vector. Assuming the cross product of two 2D vectors is, U x V = Ux * Vy - Uy * Vx.
     * @param v The other vector
     * @category Other
     */
    getCrossProduct(v: Vector2D) {
        return this.x * v.y - this.y * v.x;
    }

    /**
     * Get a unit vector for this vector
     * @category Immutable Operations
     */
    unitVector() {
        let v = this.clone();
        v.mutableUnitVector();
        return v;
    }

    /**
     * Get a vector that is normal (counter-clockwise perpendicular) to this vector (with the same length as this vector)
     * @category Immutable Operations
     */
    normalVector() {
        let v = this.clone();
        v.mutableNormalVector();
        return v;
    }

    /**
     * Add the components of another vector to this vector and return the result as a new vector (without modifying either input vector)
     * @param v The other vector
     * @category Immutable Operations
     */
    add(v: Vector2D) {
        let v2 = this.clone();
        v2.mutableAdd(v);
        return v2;
    }

    /**
     * Subtract the components of another vector from this vector and return the result as a new vector (without modifying either input vector)
     * @param v The other vector
     * @category Immutable Operations
     */
    subtract(v: Vector2D) {
        let v2 = this.clone();
        v2.mutableSubtract(v);
        return v2;
    }

    /**
     * Scale the components of this vector by a scalar and return the result as a new vector (without modifying this vector)
     * @param scalar 
     * @category Immutable Operations
     */
    scale(scalar: number) {
        let v = this.clone();
        v.mutableScale(scalar);
        return v;
    }

    /**
     * Set the 'x' component of the vector
     * @param x The value that the 'x' component will be set to
     * @category Set Vector
     */
    setX(x: number) {
        this.x = x;
    }

    /**
     * Set the 'y' component of the vector
     * @param y The value that the 'y' component will be set to
     * @category Set Vector
     */
    setY(y: number) {
        this.y = y;
    }

    /**
     * Set the components of this vector based on the components of another vector
     * @param v The other vector
     * @category Set Vector
     */
    setFromVector(v: Vector2D) {
        this.x = v.x;
        this.y = v.y;
    }

    /**
     * Set the 'x' and 'y' components of this vector to the specified values
     * @param x The value that the 'x' component will be set to
     * @param y The value that the 'y' component will be set to
     * @category Set Vector
     */
    setFromComponents(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Set the components of this vector to zero
     * @category Set Vector
     */
    setToZero() {
        this.setFromComponents(0, 0);
    }

    /**
     * Set the length of this vector without modifying the angle
     * @param length The length to set this vector to
     * @category Set Vector
     */
    setLength(length: number) {
        this.mutableScale(length / this.getLength());
    }

    /**
     * Set the angle (in radians) of this vector without modifying the length
     * @param angle The angle (in radians) to set this vector to
     * @category Set Vector
     */
    setAngle(angle: number) {
        let length = this.getLength();
        this.x = length * Math.cos(angle);
        this.y = length * Math.sin(angle);
    }

    /**
     * Calculate the unit vector to this vector and store the result in the original vector
     * @category Mutable Operations
     */
    mutableUnitVector() {
        let length = this.getLength();
        this.x = this.x / length;
        this.y = this.y / length;
    }

    /**
     * Add the components of another vector to this vector and store the result in the original vector
     * @param v The other vector
     * @category Mutable Operations
     */
    mutableAdd(v: Vector2D) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
    }

    /**
     * Subtract the components of another vector from this vector and store the result in the original vector
     * @param v The other vector
     * @category Mutable Operations
     */
    mutableSubtract(v: Vector2D) {
        this.x = this.x - v.x;
        this.y = this.y - v.y;
    }

    /**
     * Scale the components of this vector by a scalar and store the result in the original vector
     * @param scalar 
     * @category Mutable Operations
     */
    mutableScale(scalar: number) {
        this.x = scalar * this.x;
        this.y = scalar * this.y;
    }

    /**
     * Calculate a normal vector (counter-clockwise perpendicular) to this vector (with the same length as this vector) and store the result in the original vector
     * @category Mutable Operations
     */
    mutableNormalVector() {
        let temp = this.x;
        this.x = -this.y;
        this.y = temp;
    }

    /**
     * Check if this vector has the same 'x' and 'y' components as another vector
     * @param v The other vector
     * @category Utility
     */
    isEqual(v: Vector2D) {
        return this.x === v.x && this.y === v.y;
    }

    /**
     * Checks whether this vector is zero (ie the 'x' and 'y' components are equal to zero)
     * @category Utility
     */
    isZero() {
        return this.x == 0 && this.y == 0;
    }

    /**
     * Returns a copy of this vector as a new vector
     * @category Utility
     **/
    clone() {
        return new Vector2D(this.x, this.y);
    }

    /**
     * Returns a string representation of this vector in the form "(x-component, y-component)"
     * @category Utility
     */
    toString() {
        return "(" + this.x + ", " + this.y + ")";
    }

    /**
     * Returns a JSON representation of this vector in the form {"x": x-component, "y": y-component}
     * @category Utility
     */
    toJSON() {
        return { "x": this.x, "y": this.y };
    }

}