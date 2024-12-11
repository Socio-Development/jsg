import { JsgArray } from './array'
import { JsgBoolean } from './boolean'
import { JsgNumber } from './number'
import { JsgString } from './string'

export default {
  array: () => new JsgArray(),
  boolean: () => new JsgBoolean(),
  number: () => new JsgNumber(),
  string: () => new JsgString(),
}
