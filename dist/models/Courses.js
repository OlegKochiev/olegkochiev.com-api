"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const coursesSchema = new db_1.default.Schema({
    title: String,
    description: String,
    author: String,
    duration: String,
    hashTags: [
        {
            type: db_1.default.Schema.Types.ObjectId,
            ref: 'HashTags',
        },
    ],
});
const Courses = db_1.default.model('Courses', coursesSchema);
exports.default = Courses;
//# sourceMappingURL=Courses.js.map