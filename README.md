# Json Schema Generator (JSG)

JSG is a TypeScript-first JSON schema declaration library inspired by [zod](https://zod.dev/).

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
