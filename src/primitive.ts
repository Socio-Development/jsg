/**
 * Every JSON schema element contains a type property.
 * This type is a union of the supported JSON schema types.
 */
type JsgBaseType = 'array' | 'boolean' | 'number' | 'object' | 'string'

/**
 * The base properties available to every JSON schema element.
 */
type JsgBaseProps = {
  description?: string
  type: JsgBaseType
}

/**
 * A utility type that merges the generic type T with the base schema properties.
 */
type JsgProps<T> = T & JsgBaseProps

export default abstract class JsgPrimitive<T> {
  private _baseProps: JsgBaseProps
  // @ts-ignore Used by JsgObject to determine if a property is optional
  private _optional: boolean
  abstract _props: T

  constructor(type: JsgBaseType) {
    this._baseProps = { type }
    this._optional = false
  }

  /**
   * A long description of the element.
   * Used in hover menus and suggestions.
   */
  description(str: string): this {
    this._baseProps.description = str
    return this
  }

  /**
   * Prevents the element from being required in the parent object.
   */
  optional(): this {
    this._optional = true
    return this
  }

  /**
   * Returns the JSON schema object for the element.
   * The output can be written directly to a JSON file.
   */
  stringify(): string {
    return JSON.stringify(this)
  }

  /**
   * Returns the normalized schema object for the element.
   */
  toJSON(): JsgProps<T> {
    return { ...this._baseProps, ...this._props }
  }
}
