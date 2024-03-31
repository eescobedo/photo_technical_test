export class Geo {
  constructor (
    public lat: string,
    public lng: string
  ) {}
}

export class Address {
  constructor (
    public street: string,
    public suite: string,
    public city: string,
    public zipcode: string,
    public geo: Geo
  ) {}
}
