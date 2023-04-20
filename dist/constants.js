"use strict";
const PATHS = {
    PORTFOLIO: {
        ALL: () => `api/portfolio`,
        BY_TAG: (tag) => `api/portfolio/tag/${tag}`,
        BY_PROJECT: (name) => `api/portfolio/project/${name}`,
    },
    EDUCATION: {
        ALL: () => `api/education`,
        BY_TAG: (tag) => `api/education/tag/${tag}`,
        BY_COURSE: (name) => `api/education/course/${name}`,
    },
    ABOUT_ME: () => `api/about-me`,
};
//# sourceMappingURL=constants.js.map