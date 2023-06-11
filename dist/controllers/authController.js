"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const users_service_1 = require("../services/users.service");
class AuthController {
    static async login(req, res) {
        try {
            const params = req.body;
            const service = new users_service_1.UsersService();
            const user = await service.login(params);
            return res.status(200).send(user);
        }
        catch (error) {
            return res.send(error);
        }
    }
    static async register(req, res) {
        try {
            const params = req.body;
            const service = new users_service_1.UsersService();
            const user = await service.register(params);
            return res.status(200).send(user);
        }
        catch (error) {
            return res.send(error);
        }
    }
    static async getStocks(req, res) {
        try {
            const params = req.body;
            const service = new users_service_1.UsersService();
            const stocks = await service.getStocks(params);
            return res.status(200).send(stocks);
        }
        catch (error) {
            return res.send(error);
        }
    }
    static async updateStocks(req, res) {
        try {
            const params = req.body;
            const service = new users_service_1.UsersService();
            const stocks = await service.updateStocks(params);
            return res.status(200).send(stocks);
        }
        catch (error) {
            return res.send(error);
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=authController.js.map