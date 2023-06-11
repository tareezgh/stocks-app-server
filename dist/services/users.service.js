"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const users_dal_1 = require("../dal/users.dal");
const bcrypt = require("bcrypt");
class UsersService {
    async login(user) {
        const dal = new users_dal_1.UsersDal();
        const hashedPasswordFromDB = await dal.getUserPassword(user);
        if (!hashedPasswordFromDB)
            return { status: "failure", message: "User doesn't exist!!" };
        const response = await bcrypt.compare(user.password, hashedPasswordFromDB);
        if (response)
            return {
                status: "success",
                message: "User logged in",
            };
        else
            return { status: "failure", message: "Incorrect username or password" };
    }
    async register(user) {
        const dal = new users_dal_1.UsersDal();
        const saltRounds = 10;
        const isUserExist = await dal.checkUser(user);
        if (isUserExist)
            return { status: "failure", message: "Username already used!" };
        bcrypt.hash(user.password, saltRounds, async (err, hash) => {
            user["password"] = hash;
            await dal.createUser(user);
        });
        return { status: "success", message: "success!" };
    }
    async getStocks(user) {
        const dal = new users_dal_1.UsersDal();
        const userStocks = await dal.getUserStocks(user);
        // return { status: "success", message: "success!", data: userStocks };
        return userStocks;
    }
    async updateStocks(params) {
        const dal = new users_dal_1.UsersDal();
        const status = await dal.updateUserStocks(params);
        const userStocks = await dal.getUserStocks(params);
        return { status: "success", message: "success!", data: userStocks };
    }
    async getUsers() {
        const dal = new users_dal_1.UsersDal();
        const res = await dal.findAll();
        return res;
    }
    async createUser(user) {
        const dal = new users_dal_1.UsersDal();
        const res = dal.createUser(user);
        return res;
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map