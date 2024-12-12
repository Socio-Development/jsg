import { JsgString } from '../string'

describe('JsgString', () => {
  describe('constructor', () => {
    it('sets _baseProps to "string"', () => {
      const el = new JsgString()

      expect(el['_baseProps'].type).toBe('string')
    })

    it('sets _props to {}', () => {
      const el = new JsgString()

      expect(el['_props']).toStrictEqual({})
    })
  })

  describe('maxLength', () => {
    it('sets _props.maxLength to 10', () => {
      const el = new JsgString().maxLength(10)

      expect(el['_props'].maxLength).toBe(10)
    })
  })

  describe('minLength', () => {
    it('sets _props.minLength to 5', () => {
      const el = new JsgString().minLength(5)

      expect(el['_props'].minLength).toBe(5)
    })
  })

  describe('pattern', () => {
    it('sets _props.pattern to "^[a-zA-Z]"', () => {
      const el = new JsgString().pattern('^[a-zA-Z]')

      expect(el['_props'].pattern).toBe('^[a-zA-Z]')
    })
  })
})
