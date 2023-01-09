import { CookieMeta } from './ReactConsentGdpr.types';

export function isMatch(
  cookieName: string,
  validator: CookieMeta['name']
): boolean {
  if (typeof validator === 'string') {
    return cookieName === validator;
  }

  if (validator instanceof RegExp) {
    return validator.test(cookieName);
  }

  if (typeof validator === 'function') {
    return validator(cookieName);
  }

  return false;
}
