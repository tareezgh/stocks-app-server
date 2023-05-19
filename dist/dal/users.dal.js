"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDal = void 0;
const users_1 = __importDefault(require("../db/models/users"));
class UsersDal {
    createUser(user) {
        user = new users_1.default({
            username: user.username,
            password: user.password,
            authentication: "User",
        });
        user.save(function (err, results) {
            return results;
        });
    }
    async getUserPassword(user) {
        const data = await users_1.default.findOne({
            username: user.username,
        });
        return data?.password;
    }
    async checkUser(user) {
        const data = await users_1.default.findOne({
            username: user.username,
        });
        return data?.username === user.username;
    }
    findAll(query = null) {
        return users_1.default.find(query);
    }
}
exports.UsersDal = UsersDal;
