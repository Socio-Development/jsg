import JsgPrimitive from './primitive'
import type { JsgAny, JsgAnyProps, JsgObjectProps, JsgProps } from './types'

/**
 * A class for defining JSON Schema Generator object types.
 */
export class JsgObject extends JsgPrimitive<JsgObjectProps> {
  private _properties: { key: string; value: JsgAny }[]

  constructor(props: Record<string, JsgAny> = {}) {
    super('object')

    this._properties = Object.entries(props)
      .map(([key, value]) => ({ key, value }))
      .sort((a, b) => a.key.localeCompare(b.key))
  }

  private get _propertiesToJSON():
    | Record<string, JsgProps<JsgAnyProps>>
    | undefined {
    const jsonProps = this._properties
      .sort((a, b) => a.key.localeCompare(b.key))
      .reduce(
        (acc, { key, value }) => {
          acc[key] = value.toJSON()
          return acc
        },
        {} as Record<string, JsgProps<JsgAnyProps>>
      )

    return Object.keys(jsonProps).length > 0 ? jsonProps : undefined
  }

  override get _props(): JsgObjectProps {
    const res: JsgObjectProps = {}

    const properties = this._propertiesToJSON
    if (properties) {
      res.properties = properties
    }

    const required = this._required
    if (required) {
      res.required = required
    }

    return res
  }

  private get _required(): string[] | undefined {
    const requiredKeys = this._properties
      .filter(({ value }) => !value['_optional'])
      .map(({ key }) => key)

    return requiredKeys.length > 0 ? requiredKeys : undefined
  }
}
