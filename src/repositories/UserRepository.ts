import axios from 'axios'

export class UserRepository {
  async getUserById (userId: string) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return response.data
  }
}
