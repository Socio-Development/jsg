import { JsgBoolean } from './boolean'
import { JsgString } from './string'

export default {
  boolean: () => new JsgBoolean(),
  string: () => new JsgString(),
}
