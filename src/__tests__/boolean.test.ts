import { JsgBoolean } from '../boolean'

describe('JsgBoolean', () => {
  describe('constructor', () => {
    it('sets _baseProps to "boolean"', () => {
      const el = new JsgBoolean()

      expect(el['_baseProps'].type).toBe('boolean')
    })

    it('sets _props to {}', () => {
      const el = new JsgBoolean()

      expect(el['_props']).toStrictEqual({})
    })
  })
})
