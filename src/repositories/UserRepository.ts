import axios from 'axios'

import { User } from '../models/User'
import { Address, Geo } from '../models/Address'
import { Company } from '../models/Company'
import 'dotenv/config'

export class UserRepository {
  async getUserById (userId: string): Promise<User> {
    const response = await axios.get(`${process.env.EXTERNAL_API_URL}/users/${userId}`)
    const data = response.data
    const address = new Address(
      data.address.street,
      data.address.suite,
      data.address.city,
      data.address.zipcode,
      new Geo(data.address.geo.lat, data.address.geo.lng)
    )
    const company = new Company(data.company.name, data.company.catchPhrase, data.company.bs)
    return new User(data.id, data.name, data.username, data.email, address, data.phone, data.website, company)
  }

  async getAllUsers (): Promise<User[]> {
    const response = await axios.get(`${process.env.EXTERNAL_API_URL}/users`)
    const data = response.data

    return data.map((user: any) => {
      const address = new Address(
        user.address.street,
        user.address.suite,
        user.address.city,
        user.address.zipcode,
        new Geo(user.address.geo.lat, user.address.geo.lng)
      )
      const company = new Company(user.company.name, user.company.catchPhrase, user.company.bs)
      return new User(user.id, user.name, user.username, user.email, address, user.phone, user.website, company)
    })
  }
}
