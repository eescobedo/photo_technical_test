"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.Geo = void 0;
class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
exports.Geo = Geo;
class Address {
    constructor(street, suite, city, zipcode, geo) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}
exports.Address = Address;
