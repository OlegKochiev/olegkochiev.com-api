"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const constants_1 = require("../constants");
const router = (0, express_1.Router)();
router.get(constants_1.PATHS.HOME(), (req, res) => {
    try {
        return res.status(200).json(process.env);
    }
    catch (error) {
        return res.status(500).send(error);
    }
});
exports.default = router;
//# sourceMappingURL=home.js.map