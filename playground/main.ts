import { userSchema } from './schemas/user'

function main() {
  console.log(JSON.stringify(userSchema, null, 2))
}

main()
