import JsgPrimitive from './primitive'
import type { JsgStringProps } from './types'

/**
 * A class for defining JSON Schema Generator string types.
 */
export class JsgString extends JsgPrimitive<JsgStringProps> {
  override _props: JsgStringProps

  constructor() {
    super('string')

    this._props = {}
  }

  /**
   * The maximum length of a string.
   */
  maxLength(length: number): this {
    this._props.maxLength = length
    return this
  }

  /**
   * The minimum length of a string.
   */
  minLength(length: number): this {
    this._props.minLength = length
    return this
  }

  /**
   * A regular expression to match the string against.
   * It is not implicitly anchored.
   */
  pattern(regex: string): this {
    this._props.pattern = regex
    return this
  }
}
