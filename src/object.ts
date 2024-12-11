import JsgPrimitive from './primitive'

/**
 * Properties available for the JSON schema object type.
 */
type JsgObjectProps = {}

/**
 * A class for defining JSON Schema Generator object types.
 */
export class JsgObject extends JsgPrimitive<JsgObjectProps> {
  override _props: JsgObjectProps

  constructor() {
    super('object')

    this._props = {}
  }
}
