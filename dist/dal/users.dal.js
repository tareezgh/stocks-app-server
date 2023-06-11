"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDal = void 0;
const users_1 = __importDefault(require("../db/models/users"));
class UsersDal {
    async createUser(user) {
        try {
            const newUser = new users_1.default({
                username: user.username,
                password: user.password,
            });
            const savedUser = await newUser.save();
            return savedUser;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    async getUserPassword(user) {
        const data = await users_1.default.findOne({
            username: user.username,
        });
        return data === null || data === void 0 ? void 0 : data.password;
    }
    async getUserStocks(user) {
        const data = await users_1.default.findOne({
            username: user.username,
        });
        return data === null || data === void 0 ? void 0 : data.stocks;
    }
    async updateUserStocks(user) {
        const data = await users_1.default.findOneAndUpdate({ username: user.username }, { $push: { stocks: user.stockToAdd } }, { new: true });
        return data;
    }
    async checkUser(user) {
        const data = await users_1.default.findOne({
            username: user.username,
        });
        return (data === null || data === void 0 ? void 0 : data.username) === user.username;
    }
    findAll(query = null) {
        return users_1.default.find(query);
    }
}
exports.UsersDal = UsersDal;
//# sourceMappingURL=users.dal.js.map