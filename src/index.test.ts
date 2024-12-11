import { JsgBoolean } from './boolean'
import jsg from './index'
import { JsgString } from './string'

describe('jsg', () => {
  describe('string', () => {
    it('returns a JsgString instance', () => {
      const actual = jsg.string()
      const expected = new JsgString()

      expect(actual).toEqual(expected)
    })
  })

  describe('boolean', () => {
    it('returns a JsgBoolean instance', () => {
      const actual = jsg.boolean()
      const expected = new JsgBoolean()

      expect(actual).toEqual(expected)
    })
  })
})
