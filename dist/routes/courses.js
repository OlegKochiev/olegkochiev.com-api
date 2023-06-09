"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courses_1 = require("../controllers/courses");
const constants_1 = require("../constants");
const router = (0, express_1.Router)();
router.get(constants_1.PATHS.COURSES.ALL(), courses_1.getCourses);
exports.default = router;
//# sourceMappingURL=courses.js.map