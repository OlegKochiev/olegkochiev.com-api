"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const home_1 = __importDefault(require("./routes/home"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(home_1.default);
// app.use(portfolioRouter);
// app.use(coursesRouter);
exports.default = app;
//# sourceMappingURL=app.js.map