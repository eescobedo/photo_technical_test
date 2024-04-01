"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const axios_1 = __importDefault(require("axios"));
const User_1 = require("../models/User");
const Address_1 = require("../models/Address");
const Company_1 = require("../models/Company");
require("dotenv/config");
class UserRepository {
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${process.env.EXTERNAL_API_URL}/users/${userId}`);
            const data = response.data;
            const address = new Address_1.Address(data.address.street, data.address.suite, data.address.city, data.address.zipcode, new Address_1.Geo(data.address.geo.lat, data.address.geo.lng));
            const company = new Company_1.Company(data.company.name, data.company.catchPhrase, data.company.bs);
            return new User_1.User(data.id, data.name, data.username, data.email, address, data.phone, data.website, company);
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`${process.env.EXTERNAL_API_URL}/users`);
            const data = response.data;
            return data.map((user) => {
                const address = new Address_1.Address(user.address.street, user.address.suite, user.address.city, user.address.zipcode, new Address_1.Geo(user.address.geo.lat, user.address.geo.lng));
                const company = new Company_1.Company(user.company.name, user.company.catchPhrase, user.company.bs);
                return new User_1.User(user.id, user.name, user.username, user.email, address, user.phone, user.website, company);
            });
        });
    }
}
exports.UserRepository = UserRepository;
