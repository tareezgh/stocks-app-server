"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
const connectDb = async () => {
    // await mongoose.connect("mongodb://localhost/stocks-app");
    await mongoose_1.default.connect("mongodb+srv://Tareez:Ghandour@stocks.memk9pu.mongodb.net/?retryWrites=true&w=majority");
};
exports.connectDb = connectDb;
//# sourceMappingURL=index.js.map