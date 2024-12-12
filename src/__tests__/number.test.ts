import { JsgNumber } from '../number'

describe('JsgNumber', () => {
  describe('constructor', () => {
    it('sets _baseProps to "number"', () => {
      const el = new JsgNumber()

      expect(el['_baseProps'].type).toBe('number')
    })

    it('sets _props to {}', () => {
      const el = new JsgNumber()

      expect(el['_props']).toStrictEqual({})
    })
  })

  describe('exclusiveMaximum', () => {
    it('sets _props.exclusiveMaximum to 255', () => {
      const el = new JsgNumber().exclusiveMaximum(255)

      expect(el['_props'].exclusiveMaximum).toBe(255)
    })
  })

  describe('exclusiveMinimum', () => {
    it('sets _props.exclusiveMinimum to 0', () => {
      const el = new JsgNumber().exclusiveMinimum(0)

      expect(el['_props'].exclusiveMinimum).toBe(0)
    })
  })

  describe('maximum', () => {
    it('sets _props.maximum to 100', () => {
      const el = new JsgNumber().maximum(100)

      expect(el['_props'].maximum).toBe(100)
    })
  })

  describe('minimum', () => {
    it('sets _props.minimum to 1', () => {
      const el = new JsgNumber().minimum(1)

      expect(el['_props'].minimum).toBe(1)
    })
  })

  describe('multipleOf', () => {
    it('sets _props.multipleOf to 10', () => {
      const el = new JsgNumber().multipleOf(10)

      expect(el['_props'].multipleOf).toBe(10)
    })
  })
})
