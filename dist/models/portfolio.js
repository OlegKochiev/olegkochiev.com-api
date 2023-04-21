"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const portfolioSchema = new db_1.default.Schema({
    title: String,
    description: String,
    hashTags: [
        {
            type: db_1.default.Schema.Types.ObjectId,
            ref: 'HashTags',
        },
    ],
});
const Portfolio = db_1.default.model('Portfolio', portfolioSchema);
exports.default = Portfolio;
//# sourceMappingURL=Portfolio.js.map