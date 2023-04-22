const PATHS = {
  HOME: () => `/`,
  PORTFOLIO: {
    ALL: () => `/api/portfolio`,
    BY_TAG: (tag: string) => `/api/portfolio/tag/${tag}`,
    BY_PROJECT: (name: string) => `/api/portfolio/${name}`,
  },
  COURSES: {
    ALL: () => `/api/courses`,
    BY_TAG: (tag: string) => `/api/courses/tag/${tag}`,
    BY_COURSE: (name: string) => `/api/courses/${name}`,
  },
  ABOUT_ME: () => `/api/about-me`,
};
export {PATHS};
