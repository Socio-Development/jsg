# Json Schema Generator (JSG)

JSG is a TypeScript-first JSON schema declaration library inspired by [zod](https://zod.dev/).

## Installation

### From npm

```bash
npm i @socio-development/jsg
deno add npm:@socio-development/jsg
yarn add @socio-development/jsg
bun add @socio-development/jsg
pnpm add @socio-development/jsg
```

## Basic usage

>These examples assumes you are using npm, typescript, and importing directly from the `@socio-development/jsg` package.

Creating a simple JSON string element

**TypeScript**
```ts
import jsg from '@socio-development/jsg'

// Creating a schema for strings
const mySchema = jsg.string()

// Outputting the schema
console.log(JSON.stringify(mySchema, null, 2))
```

**JSON**
```json
{
  "type": "string"
}
```

An upcoming version will include tooling for outputting the schema. Maybe even writing it to a file.

## Advanced usage

**TypeScript**
```ts
import jsg from '@socio-development/jsg'

const adminSchema = jsg
  .boolean()
  .description('Property only included when value is true.')
  .const(true)
  .optional()

const firstNameSchema = jsg.string().minLength(1).maxLength(50)
const lastNameSchema = jsg.string().minLength(1).maxLength(50)

const usernameSchema = jsg
  .string()
  .description(
    'The username must be unique as it is often used as a slug in URLs.'
  )
  .minLength(3)
  .maxLength(20)
  .pattern('^[a-zA-Z]')

const userSchema = jsg.object({
  admin: adminSchema,
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  username: usernameSchema,
})

console.log(JSON.stringify(userSchema, null, 2))
```

**JSON**
```json
{
  "type": "object",
  "properties": {
    "admin": {
      "type": "boolean",
      "description": "Only included if true.",
      "const": true
    },
    "firstName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 50
    },
    "lastName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 50
    },
    "username": {
      "type": "string",
      "description": "The username must be unique as it is often used as a slug in URLs.",
      "minLength": 3,
      "maxLength": 20,
      "pattern": "^[a-zA-Z]"
    }
  },
  "required": ["firstName", "lastName", "username"]
}
```
