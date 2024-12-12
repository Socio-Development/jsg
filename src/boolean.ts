import JsgPrimitive from './primitive'
import type { JsgBooleanProps } from './types'

/**
 * A class for defining JSON Schema Generator boolean types.
 */
export class JsgBoolean extends JsgPrimitive<JsgBooleanProps> {
  override _props: JsgBooleanProps

  constructor() {
    super('boolean')

    this._props = {}
  }

  /**
   * An instance validates successfully against this keyword if its value is equal to the value of the keyword.
   */
  const(value: boolean): this {
    this._props.const = value
    return this
  }
}
