import { JsgBoolean } from './boolean'
import jsg from './index'
import { JsgNumber } from './number'
import { JsgString } from './string'

describe('jsg', () => {
  describe('boolean', () => {
    it('returns a JsgBoolean instance', () => {
      const actual = jsg.boolean()
      const expected = new JsgBoolean()

      expect(actual).toEqual(expected)
    })
  })

  describe('number', () => {
    it('returns a JsgNumber instance', () => {
      const actual = jsg.number()
      const expected = new JsgNumber()

      expect(actual).toEqual(expected)
    })
  })

  describe('string', () => {
    it('returns a JsgString instance', () => {
      const actual = jsg.string()
      const expected = new JsgString()

      expect(actual).toEqual(expected)
    })
  })
})
