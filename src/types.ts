/**
 * The base properties available to every JSON schema element.
 */
export type JsgBaseProps = {
  description?: string
  type: JsgBaseType
}

/**
 * Every JSON schema element contains a type property.
 * This type is a union of the supported JSON schema types.
 */
export type JsgBaseType = 'array' | 'boolean' | 'number' | 'object' | 'string'

/**
 * A utility type that merges the generic type T with the base schema properties.
 */
export type JsgProps<T> = T & JsgBaseProps
