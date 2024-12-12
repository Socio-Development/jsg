import { JsgString } from '../string'

describe('JsgPrimitive', () => {
  describe('constructor', () => {
    it('sets _optional to false by default', () => {
      const el = new JsgString()

      expect(el['_optional']).toBe(false)
    })

    it('does not add "optional" to _baseProps', () => {
      const el = new JsgString()
      const baseProps = el['_baseProps']
      const basePropsKeys = Object.keys(baseProps)

      expect(basePropsKeys).not.toContain('optional')
    })
  })

  describe('description', () => {
    it('sets _baseProps.description to "A string"', () => {
      const el = new JsgString().description('A string')

      expect(el['_baseProps'].description).toBe('A string')
    })
  })

  describe('optional', () => {
    it('sets _optional to true', () => {
      const el = new JsgString().optional()

      expect(el['_optional']).toBe(true)
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
