# Json Schema Generator (JSG)

JSG is a TypeScript-first JSON schema declaration library inspired by [zod](https://zod.dev/).

```ts
import jsg from '@socio-development/jsg'

const usernameSchema = jsg
  .string()
  .minLength(6)
  .maxLength(20)
  .pattern('^[a-zA-Z][a-zA-Z0-9_]*$')

const userSchema = jsg
  .object({
    username: usernameSchema,
  })
  .description('A user object.')

console.log(userSchema.stringify())
```

```json
{
  "type": "object",
  "description": "A user object.",
  "properties": {
    "username": {
      "type": "string",
      "minLength": 6,
      "maxLength": 20,
      "pattern": "^[a-zA-Z][a-zA-Z0-9_]*$"
    }
  },
  "required": ["username"]
}
```
