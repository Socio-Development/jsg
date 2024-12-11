import { JsgArray } from './array'
import { JsgBoolean } from './boolean'
import { JsgNumber } from './number'
import { JsgObject } from './object'
import { JsgString } from './string'
import type { JsgAny } from './types'

export default {
  array: () => new JsgArray(),
  boolean: () => new JsgBoolean(),
  number: () => new JsgNumber(),
  object: (props: Record<string, JsgAny> = {}) => new JsgObject(props),
  string: () => new JsgString(),
}
