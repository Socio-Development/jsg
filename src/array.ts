import JsgPrimitive from './primitive'

/**
 * Properties available for the JSON schema array type.
 */
type JsgArrayProps = {
  uniqueItems?: boolean
}

/**
 * A class for defining JSON Schema Generator array types.
 */
export class JsgArray extends JsgPrimitive<JsgArrayProps> {
  override _props: JsgArrayProps

  constructor() {
    super('array')

    this._props = {}
  }

  /**
   * If all of the items in the array must be unique.
   * @param val Whether the items must be unique (default: true).
   */
  uniqueItems(value = true): this {
    this._props.uniqueItems = value
    return this
  }
}
