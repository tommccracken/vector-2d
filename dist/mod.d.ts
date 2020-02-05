/**
 * The 2D vector class.
 */
export declare class Vector2D {
    /**
     * The 'x' component of the vector
     */
    private x;
    /**
     * The 'y' component of the vector
     */
    private y;
    /**
     * @param x The 'x' component of the vector
     * @param y The 'y' component of the vector
     */
    constructor(x: number, y: number);
    /**
     * Get the 'x' component of this vector
     * @category Get Vector Attribute
     */
    getX(): number;
    /**
     * Get the 'y' component of this vector
     * @category Get Vector Attribute
     */
    getY(): number;
    /**
     * Get the square of the length of this vector
     * @category Get Vector Attribute
     */
    getLengthSquared(): number;
    /**
     * Get the length of this vector
     * @category Get Vector Attribute
     */
    getLength(): number;
    /**
     * Get the angle in radians of this vector (relative to the origin)
     * @category Get Vector Attribute
     */
    getAngle(): number;
    /**
     * Get the square of the scalar distance of this vector from another vector
     * @param v The other vector
     * @category Other
     */
    getDistanceFromSquared(v: Vector2D): number;
    /**
     * Get the scalar distance of this vector from another vector
     * @param v The other vector
     * @category Other
     */
    getDistanceFrom(v: Vector2D): number;
    /**
     * Get the angle of another vector from this vector
     * @param v The other vector
     * @category Other
     */
    getAngleBetween(v: Vector2D): number;
    /**
     * Get the dot product of this vector and another vector
     * @param v The other vector
     * @category Other
     */
    getDotProduct(v: Vector2D): number;
    /**
     * Get the cross product of this vector and another vector. Assuming the cross product of two 2D vectors is, U x V = Ux * Vy - Uy * Vx.
     * @param v The other vector
     * @category Other
     */
    getCrossProduct(v: Vector2D): number;
    /**
     * Get a unit vector for this vector
     * @category Immutable Operations
     */
    unitVector(): Vector2D;
    /**
     * Get a vector that is normal (counter-clockwise perpendicular) to this vector (with the same length as this vector)
     * @category Immutable Operations
     */
    normalVector(): Vector2D;
    /**
     * Add the components of another vector to this vector and return the result as a new vector (without modifying either input vector)
     * @param v The other vector
     * @category Immutable Operations
     */
    add(v: Vector2D): Vector2D;
    /**
     * Subtract the components of another vector from this vector and return the result as a new vector (without modifying either input vector)
     * @param v The other vector
     * @category Immutable Operations
     */
    subtract(v: Vector2D): Vector2D;
    /**
     * Scale the components of this vector by a scalar and return the result as a new vector (without modifying this vector)
     * @param scalar
     * @category Immutable Operations
     */
    scale(scalar: number): Vector2D;
    /**
     * Set the 'x' component of the vector
     * @param x The value that the 'x' component will be set to
     * @category Set Vector
     */
    setX(x: number): void;
    /**
     * Set the 'y' component of the vector
     * @param y The value that the 'y' component will be set to
     * @category Set Vector
     */
    setY(y: number): void;
    /**
     * Set the components of this vector based on the components of another vector
     * @param v The other vector
     * @category Set Vector
     */
    setFromVector(v: Vector2D): void;
    /**
     * Set the 'x' and 'y' components of this vector to the specified values
     * @param x The value that the 'x' component will be set to
     * @param y The value that the 'y' component will be set to
     * @category Set Vector
     */
    setFromComponents(x: number, y: number): void;
    /**
     * Set the components of this vector to zero
     * @category Set Vector
     */
    setToZero(): void;
    /**
     * Set the length of this vector without modifying the angle
     * @param length The length to set this vector to
     * @category Set Vector
     */
    setLength(length: number): void;
    /**
     * Set the angle (in radians) of this vector without modifying the length
     * @param angle The angle (in radians) to set this vector to
     * @category Set Vector
     */
    setAngle(angle: number): void;
    /**
     * Calculate the unit vector to this vector and store the result in the original vector
     * @category Mutable Operations
     */
    mutableUnitVector(): void;
    /**
     * Add the components of another vector to this vector and store the result in the original vector
     * @param v The other vector
     * @category Mutable Operations
     */
    mutableAdd(v: Vector2D): void;
    /**
     * Subtract the components of another vector from this vector and store the result in the original vector
     * @param v The other vector
     * @category Mutable Operations
     */
    mutableSubtract(v: Vector2D): void;
    /**
     * Scale the components of this vector by a scalar and store the result in the original vector
     * @param scalar
     * @category Mutable Operations
     */
    mutableScale(scalar: number): void;
    /**
     * Calculate a normal vector (counter-clockwise perpendicular) to this vector (with the same length as this vector) and store the result in the original vector
     * @category Mutable Operations
     */
    mutableNormalVector(): void;
    /**
     * Check if this vector has the same 'x' and 'y' components as another vector
     * @param v The other vector
     * @category Utility
     */
    isEqual(v: Vector2D): boolean;
    /**
     * Checks whether this vector is zero (ie the 'x' and 'y' components are equal to zero)
     * @category Utility
     */
    isZero(): boolean;
    /**
     * Returns a copy of this vector as a new vector
     * @category Utility
     **/
    clone(): Vector2D;
    /**
     * Returns a string representation of this vector in the form "(x-component, y-component)"
     * @category Utility
     */
    toString(): string;
    /**
     * Returns a JSON representation of this vector in the form {"x": x-component, "y": y-component}
     * @category Utility
     */
    toJSON(): {
        "x": number;
        "y": number;
    };
}
