import { JsgArray } from '../array'

describe('JsgArray', () => {
  describe('constructor', () => {
    it('sets _baseProps to "array"', () => {
      const el = new JsgArray()

      expect(el['_baseProps'].type).toBe('array')
    })

    it('sets _props to {}', () => {
      const el = new JsgArray()

      expect(el['_props']).toStrictEqual({})
    })
  })

  describe('uniqueItems', () => {
    it('sets _props.uniqueItems to true by default', () => {
      const el = new JsgArray().uniqueItems()

      expect(el['_props'].uniqueItems).toBe(true)
    })

    it('sets _props.uniqueItems to false', () => {
      const el = new JsgArray().uniqueItems(false)

      expect(el['_props'].uniqueItems).toBe(false)
    })
  })
})
