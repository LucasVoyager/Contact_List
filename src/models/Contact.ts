import * as enums from '../utils/ContactsE'

class Contact {
  name: string
  email: string
  local: enums.Places
  phone: number
  id: number

  constructor(
    name: string,
    email: string,
    local: enums.Places,
    phone: number,
    id: number
  ) {
    this.name = name
    this.email = email
    this.local = local
    this.phone = phone
    this.id = id
  }
}

export default Contact
