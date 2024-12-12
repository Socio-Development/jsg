import jsg from '../src'

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
