"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowCrossDomain = void 0;
const allowCrossDomain = async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, authorization");
    next();
};
exports.allowCrossDomain = allowCrossDomain;
//# sourceMappingURL=authentications.js.map