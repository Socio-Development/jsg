import { JsgBoolean } from './boolean'
import { JsgNumber } from './number'
import { JsgString } from './string'

export default {
  boolean: () => new JsgBoolean(),
  number: () => new JsgNumber(),
  string: () => new JsgString(),
}
