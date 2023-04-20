const PATHS = {
  PORTFOLIO: {
    ALL: () => `api/portfolio`,
    BY_TAG: (tag: string) => `api/portfolio/tag/${tag}`,
    BY_PROJECT: (name: string) => `api/portfolio/project/${name}`,
  },
  EDUCATION: {
    ALL: () => `api/education`,
    BY_TAG: (tag: string) => `api/education/tag/${tag}`,
    BY_COURSE: (name: string) => `api/education/course/${name}`,
  },
  ABOUT_ME: () => `api/about-me`,
};
