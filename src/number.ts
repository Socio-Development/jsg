import JsgPrimitive from './primitive'

/**
 * Properties available for the JSON schema number type.
 */
type JsgNumberProps = {
  exclusiveMaximum?: number
  exclusiveMinimum?: number
  maximum?: number
  minimum?: number
  multipleOf?: number
}

/**
 * A class for defining JSON Schema Generator number types.
 */
export class JsgNumber extends JsgPrimitive<JsgNumberProps> {
  override _props: JsgNumberProps

  constructor() {
    super('number')

    this._props = {}
  }

  /**
   * Makes the maximum property exclusive.
   */
  exclusiveMaximum(value: number): this {
    this._props.exclusiveMaximum = value
    return this
  }

  /**
   * Makes the minimum property exclusive.
   */
  exclusiveMinimum(value: number): this {
    this._props.exclusiveMinimum = value
    return this
  }

  /**
   * The maximum numerical value, inclusive by default.
   */
  maximum(value: number): this {
    this._props.maximum = value
    return this
  }

  /**
   * The minimum numerical value, inclusive by default.
   */
  minimum(value: number): this {
    this._props.minimum = value
    return this
  }

  /**
   * A number that should cleanly divide the current value (i.e. have no remainder).
   */
  multipleOf(value: number): this {
    this._props.multipleOf = value
    return this
  }
}
