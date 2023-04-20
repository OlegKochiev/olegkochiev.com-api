"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
app_1.default.listen(process.env.SERVER_PORT, () => {
    console.log(`Example app listen on ${process.env.SERVER_PORT} port`);
});
//# sourceMappingURL=server.js.map