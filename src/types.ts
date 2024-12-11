import { JsgArray } from './array'
import { JsgBoolean } from './boolean'
import { JsgNumber } from './number'
import { JsgObject } from './object'
import { JsgString } from './string'

/**
 * A union of all the JSON schema types.
 */
export type JsgAny = JsgArray | JsgBoolean | JsgNumber | JsgObject | JsgString

/**
 * A union of all the JSON schema properties available to the different JSON schema types.
 */
export type JsgAnyProps =
  | JsgArrayProps
  | JsgBooleanProps
  | JsgNumberProps
  | JsgObjectProps
  | JsgStringProps

/**
 * Properties available for the JSON schema array type.
 */
export type JsgArrayProps = {
  uniqueItems?: boolean
}

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
 * Properties available for the JSON schema boolean type.
 */
export type JsgBooleanProps = {}

/**
 * Properties available for the JSON schema number type.
 */
export type JsgNumberProps = {
  exclusiveMaximum?: number
  exclusiveMinimum?: number
  maximum?: number
  minimum?: number
  multipleOf?: number
}

/**
 * Properties available for the JSON schema object type.
 */
export type JsgObjectProps = {
  properties?: Record<string, JsgProps<JsgAnyProps>>
  required?: string[]
}

/**
 * A utility type that merges the generic type T with the base schema properties.
 */
export type JsgProps<T> = T & JsgBaseProps

/**
 * Properties available for the JSON schema string type.
 */
export type JsgStringProps = {
  maxLength?: number
  minLength?: number
  pattern?: string
}
