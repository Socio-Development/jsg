import { JsgArray } from '../array'

describe('JsgArray', () => {
  describe('constructor', () => {
    it('sets base type property to array', () => {
      const el = new JsgArray()

      const actual = el['_baseProps'].type
      const expected = 'array'

      expect(actual).toBe(expected)
    })

    it('sets props to empty object', () => {
      const el = new JsgArray()

      const actual = el['_props']
      const expected = {}

      expect(actual).toEqual(expected)
    })
  })

  describe('uniqueItems', () => {
    it('sets uniqueItems property to true (by default)', () => {
      const el = new JsgArray()

      el.uniqueItems()

      const actual = el['_props'].uniqueItems
      const expected = true

      expect(actual).toBe(expected)
    })

    it('sets uniqueItems property to false', () => {
      const el = new JsgArray()

      el.uniqueItems(false)

      const actual = el['_props'].uniqueItems
      const expected = false

      expect(actual).toBe(expected)
    })

    it('returns this', () => {
      const el = new JsgArray()

      const actual = el.uniqueItems()
      const expected = el

      expect(actual).toBe(expected)
    })
  })
})
