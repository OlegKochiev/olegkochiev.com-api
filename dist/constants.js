"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATHS = void 0;
const PATHS = {
    HOME: () => `/`,
    PORTFOLIO: {
        ALL: () => `/api/portfolio`,
        BY_TAG: (tag) => `/api/portfolio/tag/${tag}`,
        BY_PROJECT: (name) => `/api/portfolio/${name}`,
    },
    COURSES: {
        ALL: () => `/api/courses`,
        BY_TAG: (tag) => `/api/courses/tag/${tag}`,
        BY_COURSE: (name) => `/api/courses/${name}`,
    },
    ABOUT_ME: () => `/api/about-me`,
};
exports.PATHS = PATHS;
//# sourceMappingURL=constants.js.map