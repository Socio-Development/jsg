import { JsgString } from './string'

describe('JsgPrimitive', () => {
  describe('constructor', () => {
    it('sets base type property to string', () => {
      const el = new JsgString()

      const actual = el['_baseProps'].type
      const expected = 'string'

      expect(actual).toBe(expected)
    })

    it('sets optional property to false', () => {
      const el = new JsgString()

      const actual = el['_optional']
      const expected = false

      expect(actual).toBe(expected)
    })

    it('does not set "optional" as a base property', () => {
      const el = new JsgString()
      const baseProps = el['_baseProps']
      const basePropsKeys = Object.keys(baseProps)

      expect(basePropsKeys).not.toContain('optional')
    })
  })

  describe('description', () => {
    it('sets description property', () => {
      const el = new JsgString()

      el.description('A string')

      const actual = el['_baseProps'].description
      const expected = 'A string'

      expect(actual).toBe(expected)
    })

    it('returns the element', () => {
      const el = new JsgString()

      const actual = el.description('A string')
      const expected = el

      expect(actual).toBe(expected)
    })
  })

  describe('optional', () => {
    it('sets optional property to true', () => {
      const el = new JsgString()

      el.optional()

      const actual = el['_optional']
      const expected = true

      expect(actual).toBe(expected)
    })

    it('returns the element', () => {
      const el = new JsgString()

      const actual = el.optional()
      const expected = el

      expect(actual).toBe(expected)
    })
  })

  describe('stringify', () => {
    it('returns the JSON string', () => {
      const el = new JsgString()
        .description('A string')
        .pattern('^[a-zA-Z]')
        .optional()

      const actual = el.stringify()
      const expected = JSON.stringify({
        type: 'string',
        description: 'A string',
        pattern: '^[a-zA-Z]',
      })

      expect(actual).toBe(expected)
    })
  })
})
