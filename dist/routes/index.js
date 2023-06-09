"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const router = express.Router();
router.use("/api/auth/", auth_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map