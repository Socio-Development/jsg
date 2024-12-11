import { firstNameSchema, lastNameSchema, usernameSchema } from './schemas/user'
import jsg from '../src'

function main() {
  const user = {
    type: 'object',
    properties: {
      admin: jsg.boolean(),
      firstName: firstNameSchema,
      lastName: lastNameSchema,
      username: usernameSchema,
    },
  }

  console.log(JSON.stringify(user, null, 2))
}

main()
