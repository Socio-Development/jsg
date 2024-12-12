import { JsgString } from '../string'

describe('JsgString', () => {
  describe('constructor', () => {
    it('sets base type property to string', () => {
      const el = new JsgString()

      const actual = el['_baseProps'].type
      const expected = 'string'

      expect(actual).toBe(expected)
    })

    it('sets props to empty object', () => {
      const el = new JsgString()

      const actual = el['_props']
      const expected = {}

      expect(actual).toEqual(expected)
    })
  })

  describe('maxLength', () => {
    it('sets maxLength property', () => {
      const el = new JsgString()

      el.maxLength(10)

      const actual = el['_props'].maxLength
      const expected = 10

      expect(actual).toBe(expected)
    })

    it('returns this', () => {
      const el = new JsgString()

      const actual = el.maxLength(10)
      const expected = el

      expect(actual).toBe(expected)
    })
  })

  describe('minLength', () => {
    it('sets minLength property', () => {
      const el = new JsgString()

      el.minLength(10)

      const actual = el['_props'].minLength
      const expected = 10

      expect(actual).toBe(expected)
    })

    it('returns this', () => {
      const el = new JsgString()

      const actual = el.minLength(10)
      const expected = el

      expect(actual).toBe(expected)
    })
  })

  describe('pattern', () => {
    it('sets pattern property', () => {
      const el = new JsgString()

      el.pattern('test')

      const actual = el['_props'].pattern
      const expected = 'test'

      expect(actual).toBe(expected)
    })

    it('returns this', () => {
      const el = new JsgString()

      const actual = el.pattern('test')
      const expected = el

      expect(actual).toBe(expected)
    })
  })
})
