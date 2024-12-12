import { JsgNumber } from '../number'

describe('JsgNumber', () => {
  describe('constructor', () => {
    it('sets base type property to number', () => {
      const el = new JsgNumber()

      const actual = el['_baseProps'].type
      const expected = 'number'

      expect(actual).toBe(expected)
    })

    it('sets props to empty object', () => {
      const el = new JsgNumber()

      const actual = el['_props']
      const expected = {}

      expect(actual).toEqual(expected)
    })
  })

  describe('exclusiveMaximum', () => {
    it('sets exclusiveMaximum property', () => {
      const el = new JsgNumber()

      el.exclusiveMaximum(10)

      const actual = el['_props'].exclusiveMaximum
      const expected = 10

      expect(actual).toBe(expected)
    })

    it('returns this', () => {
      const el = new JsgNumber()

      const actual = el.exclusiveMaximum(10)
      const expected = el

      expect(actual).toBe(expected)
    })
  })

  describe('exclusiveMinimum', () => {
    it('sets exclusiveMinimum property', () => {
      const el = new JsgNumber()

      el.exclusiveMinimum(10)

      const actual = el['_props'].exclusiveMinimum
      const expected = 10

      expect(actual).toBe(expected)
    })

    it('returns this', () => {
      const el = new JsgNumber()

      const actual = el.exclusiveMinimum(10)
      const expected = el

      expect(actual).toBe(expected)
    })
  })

  describe('maximum', () => {
    it('sets maximum property', () => {
      const el = new JsgNumber()

      el.maximum(10)

      const actual = el['_props'].maximum
      const expected = 10

      expect(actual).toBe(expected)
    })

    it('returns this', () => {
      const el = new JsgNumber()

      const actual = el.maximum(10)
      const expected = el

      expect(actual).toBe(expected)
    })
  })

  describe('minimum', () => {
    it('sets minimum property', () => {
      const el = new JsgNumber()

      el.minimum(10)

      const actual = el['_props'].minimum
      const expected = 10

      expect(actual).toBe(expected)
    })

    it('returns this', () => {
      const el = new JsgNumber()

      const actual = el.minimum(10)
      const expected = el

      expect(actual).toBe(expected)
    })
  })

  describe('multipleOf', () => {
    it('sets multipleOf property', () => {
      const el = new JsgNumber()

      el.multipleOf(10)

      const actual = el['_props'].multipleOf
      const expected = 10

      expect(actual).toBe(expected)
    })

    it('returns this', () => {
      const el = new JsgNumber()

      const actual = el.multipleOf(10)
      const expected = el

      expect(actual).toBe(expected)
    })
  })
})
