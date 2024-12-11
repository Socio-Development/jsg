import { JsgObject } from '../src/object'

describe('JsgObject', () => {
  describe('constructor', () => {
    it('sets base type property to object', () => {
      const el = new JsgObject()

      const actual = el['_baseProps'].type
      const expected = 'object'

      expect(actual).toBe(expected)
    })

    it('sets props to empty object', () => {
      const el = new JsgObject()

      const actual = el['_props']
      const expected = {}

      expect(actual).toEqual(expected)
    })
  })
})
