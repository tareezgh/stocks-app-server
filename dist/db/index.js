"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
const connectDb = async () => {
    await mongoose_1.default.connect("mongodb://localhost/stock-app");
    // await mongoose.connect(
    //   ""
    // );
};
exports.connectDb = connectDb;
