import JsgPrimitive from './primitive'
import type { JsgObjectProps } from './types'

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
