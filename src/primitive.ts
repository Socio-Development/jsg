import { JsgFlag } from './enums'
import type { JsgBaseProps, JsgBaseType, JsgProps } from './types'

export default abstract class JsgPrimitive<T> {
  /**
   * The base properties available to every JSON schema primitive.
   */
  private _baseProps: JsgBaseProps
  /**
   * Flags used to modify the behavior of the element.
   */
  private _flags: JsgFlag[]
  /**
   * The properties specific to the primitive type.
   */
  abstract _props: T

  constructor(type: JsgBaseType) {
    this._baseProps = { type }
    this._flags = []
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
    if (!this._flags.includes(JsgFlag.OPTIONAL)) {
      this._flags.push(JsgFlag.OPTIONAL)
    }
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
