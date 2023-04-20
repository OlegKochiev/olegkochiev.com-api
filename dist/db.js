"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const configs_1 = require("./configs");
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(process.env.MONGO_CONNECTION_STRING, configs_1.DB_OPTIONS).then(() => {
    console.log('Connected to MongoDB');
});
//# sourceMappingURL=db.js.map