import { JsgBoolean } from '../boolean'

describe('JsgBoolean', () => {
  describe('constructor', () => {
    it('sets base type property to boolean', () => {
      const el = new JsgBoolean()

      const actual = el['_baseProps'].type
      const expected = 'boolean'

      expect(actual).toBe(expected)
    })

    it('sets props to empty object', () => {
      const el = new JsgBoolean()

      const actual = el['_props']
      const expected = {}

      expect(actual).toEqual(expected)
    })
  })
})
