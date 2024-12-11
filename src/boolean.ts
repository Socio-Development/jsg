import JsgPrimitive from './primitive'

/**
 * Properties available for the JSON schema boolean type.
 */
type JsgBooleanProps = {}

/**
 * A class for defining JSON Schema Generator boolean types.
 */
export class JsgBoolean extends JsgPrimitive<JsgBooleanProps> {
  override _props: JsgBooleanProps

  constructor() {
    super('boolean')

    this._props = {}
  }
}
