import { JsgObject } from '../src/object'
import { JsgNumber } from './number'
import { JsgString } from './string'
import type { JsgAny } from './types'

describe('JsgObject', () => {
  describe('constructor', () => {
    it('sets base type property to object', () => {
      const el = new JsgObject()

      const actual = el['_baseProps'].type
      const expected = 'object'

      expect(actual).toBe(expected)
    })

    it('sets props to empty object', () => {
      const el = new JsgObject()

      const actual = el['_props']
      const expected = {}

      expect(actual).toEqual(expected)
    })

    it('sets properties to empty array', () => {
      const el = new JsgObject()

      const actual = el['_properties']
      const expected: { key: string; value: JsgAny }[] = []

      expect(actual).toEqual(expected)
    })

    it('sets properties from argument', () => {
      const el = new JsgObject({
        age: new JsgNumber(),
        name: new JsgString(),
      })

      const actual = el['_properties']
      const expected = [
        { key: 'age', value: new JsgNumber() },
        { key: 'name', value: new JsgString() },
      ]

      expect(actual).toEqual(expected)
    })

    it('sorts properties by key', () => {
      const el = new JsgObject({
        b: new JsgString(),
        a: new JsgNumber(),
      })

      const actual = el['_properties']
      const expected = [
        { key: 'a', value: new JsgNumber() },
        { key: 'b', value: new JsgString() },
      ]

      expect(actual).toEqual(expected)
    })
  })

  describe('_propertiesToJSON', () => {
    it('returns undefined when _properties.length < 1', () => {
      const el = new JsgObject()

      const jsonProperties = el['_propertiesToJSON']

      expect(jsonProperties).toBeUndefined()
    })

    it('returns properties as JSON', () => {
      const el = new JsgObject({
        age: new JsgNumber().minimum(0),
        name: new JsgString(),
      })

      const actual = el['_propertiesToJSON']
      const expected = {
        age: { type: 'number', minimum: 0 },
        name: { type: 'string' },
      }

      expect(actual).toEqual(expected)
    })

    it('sorts properties by key', () => {
      const el = new JsgObject({
        b: new JsgString(),
        a: new JsgNumber(),
      })

      const actual = el['_propertiesToJSON']
      const expected = {
        a: new JsgNumber().toJSON(),
        b: new JsgString().toJSON(),
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('_props', () => {
    it('returns empty object when _propertiesToJSON is undefined', () => {
      const el = new JsgObject()

      const actual = el['_props']
      const expected = {}

      expect(actual).toEqual(expected)
    })

    it('returns properties when _propertiesToJSON is defined', () => {
      const el = new JsgObject({
        age: new JsgNumber().minimum(0).optional(),
        name: new JsgString().optional(),
      })

      const actual = el['_props']
      const expected = {
        properties: {
          age: { type: 'number', minimum: 0 },
          name: { type: 'string' },
        },
      }

      expect(actual).toEqual(expected)
    })

    it('returns required properties', () => {
      const el = new JsgObject({
        age: new JsgNumber().minimum(0),
        name: new JsgString(),
      })

      const actual = el['_props']
      const expected = {
        properties: {
          age: { type: 'number', minimum: 0 },
          name: { type: 'string' },
        },
        required: ['age', 'name'],
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('_required', () => {
    it('returns required properties', () => {
      const el = new JsgObject({
        age: new JsgNumber().minimum(0),
        name: new JsgString(),
      })

      const actual = el['_required']
      const expected = ['age', 'name']

      expect(actual).toEqual(expected)
    })

    it('sorts required property keys', () => {
      const el = new JsgObject({
        b: new JsgString(),
        a: new JsgNumber(),
      })

      const actual = el['_required']
      const expected = ['a', 'b']

      expect(actual).toEqual(expected)
    })
  })
})
