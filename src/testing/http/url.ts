import { environmentConfig } from '../../environments/environment.config';

export const makeInternalApiUrl = (relativeUrl: string) => {
  return `${environmentConfig.apiBaseUrl}/${relativeUrl.replace(/^\/*/, '')}`;
};
