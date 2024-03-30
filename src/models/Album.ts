import { User } from './User'

export class Album {
  constructor (
    public userId: number,
    public id: number,
    public title: string,
    public user: User
  ) {}
}
