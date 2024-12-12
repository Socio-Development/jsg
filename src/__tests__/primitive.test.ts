import { JsgString } from '../string'

describe('JsgPrimitive', () => {
  describe('description', () => {
    it('sets _baseProps.description to "A string"', () => {
      const el = new JsgString().description('A string')

      expect(el['_baseProps'].description).toBe('A string')
    })
  })

  describe('optional', () => {
    it('adds JsgFlag.OPTIONAL to _flags', () => {
      const el = new JsgString().optional()

      expect(el['_flags']).toEqual(['opt'])
    })

    it('does not add JsgFlag.OPTIONAL to _flags if it already exists', () => {
      const el = new JsgString().optional().optional()

      expect(el['_flags']).toEqual(['opt'])
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
