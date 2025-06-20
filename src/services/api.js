import config from '../config/index.js';

export const fetchPageData = async (pageName = "login") => {
  const response = await fetch(`${config.BASE_URL}/api/pages`);
  const data = await response.json();
  return data.find((p) => p.page === pageName);
};
