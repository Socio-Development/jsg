import { JsgObject } from '../object'
import { JsgNumber } from '../number'
import { JsgString } from '../string'

describe('JsgObject', () => {
  describe('constructor', () => {
    it('sets _baseProps to "object"', () => {
      const el = new JsgObject()

      expect(el['_baseProps'].type).toBe('object')
    })

    it('sets _properties to []', () => {
      const el = new JsgObject()

      expect(el['_properties']).toEqual([])
    })

    it('sets properties from argument and sorts by key', () => {
      const ageEl = new JsgNumber()
      const nameEl = new JsgString()
      const el = new JsgObject({
        name: nameEl,
        age: ageEl,
      })

      expect(el['_properties']).toStrictEqual([
        { key: 'age', value: ageEl },
        { key: 'name', value: nameEl },
      ])
    })
  })

  describe('_propertiesToJSON', () => {
    it('returns undefined when _properties is []', () => {
      const el = new JsgObject()

      expect(el['_properties']).toStrictEqual([])
      expect(el['_propertiesToJSON']).toBeUndefined()
    })

    it('returns the JSON format of _properties', () => {
      const el = new JsgObject({
        age: new JsgNumber().minimum(0),
        name: new JsgString(),
      })

      expect(el['_propertiesToJSON']).toStrictEqual({
        age: { type: 'number', minimum: 0 },
        name: { type: 'string' },
      })
    })

    it('sorts properties by key', () => {
      const el = new JsgObject({
        b: new JsgString(),
        a: new JsgNumber(),
      })

      expect(el['_propertiesToJSON']).toStrictEqual({
        a: { type: 'number' },
        b: { type: 'string' },
      })
    })
  })

  describe('_props', () => {
    it('returns {} when _propertiesToJSON is undefined', () => {
      const el = new JsgObject()

      expect(el['_props']).toStrictEqual({})
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

  describe('extend', () => {
    it('returns a new JsgObject with the given properties added to the existing properties', () => {
      const ageSchema = new JsgNumber().minimum(0).optional()
      const nameSchema = new JsgString()
      const namelessSchema = new JsgObject({ age: ageSchema })
      const personSchema = namelessSchema.extend({ name: nameSchema })

      const expected = new JsgObject({
        age: ageSchema,
        name: nameSchema,
      })

      expect(personSchema).toEqual(expected)
    })

    it('retains base properties', () => {
      const requiredEl = new JsgObject()
      const extendedRequiredEl = requiredEl.extend()
      const optionalEl = new JsgObject().optional()
      const extendedOptionalEl = optionalEl.extend()

      expect(extendedRequiredEl['_baseProps']).toEqual(requiredEl['_baseProps'])
      expect(extendedOptionalEl['_baseProps']).toEqual(optionalEl['_baseProps'])
    })
  })
})
