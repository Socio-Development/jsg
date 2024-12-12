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

  describe('const', () => {
    it('sets _props.const to true', () => {
      const el = new JsgBoolean().const(true)

      expect(el['_props'].const).toBe(true)
    })
  })
})
