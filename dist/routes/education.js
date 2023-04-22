"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const education_1 = require("../controllers/education");
const constants_1 = require("../constants");
const router = (0, express_1.Router)();
router.get(constants_1.PATHS.EDUCATION.ALL(), education_1.getCourses);
exports.default = router;
//# sourceMappingURL=education.js.map