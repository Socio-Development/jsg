import jsg from '../../src'

export const firstNameSchema = jsg.string().minLength(1).maxLength(50)
export const lastNameSchema = jsg.string().minLength(1).maxLength(50)

export const usernameSchema = jsg
  .string()
  .description(
    'The username must be unique as it is often used as a slug in URLs.'
  )
  .minLength(3)
  .maxLength(20)
  .pattern('^[a-zA-Z]')

export const userSchema = jsg.object({
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  username: usernameSchema,
})
