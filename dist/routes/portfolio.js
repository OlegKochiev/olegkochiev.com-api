"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const portfolio_1 = require("../controllers/portfolio");
const constants_1 = require("../constants");
const router = (0, express_1.Router)();
router.get(constants_1.PATHS.PORTFOLIO.ALL(), portfolio_1.getPortfolio);
exports.default = router;
//# sourceMappingURL=portfolio.js.map