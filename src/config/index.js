// Centralized config loader based on Vite env
const env = import.meta.env.VITE_APP_ENV || 'development';

const configMap = {
  production: () => import('./production.js'),
  staging: () => import('./staging.js'),
  development: () => import('./development.js'),
  local: () => import('./local.js'),
};

const configPromise = (configMap[env] || configMap['development'])();
const configModule = await configPromise;
export default configModule.default;
