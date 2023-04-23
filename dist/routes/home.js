"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const constants_1 = require("../constants");
const router = (0, express_1.Router)();
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
mongoose_1.default.set('strictQuery', false);
mongoose_1.default
    .connect((_a = process.env.MONGO_CONNECTION_STRING) !== null && _a !== void 0 ? _a : '')
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => console.log(error));
router.get(constants_1.PATHS.HOME(), (req, res) => {
    try {
        return res.status(200).json(mongoose_1.default);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.default = router;
//# sourceMappingURL=home.js.map