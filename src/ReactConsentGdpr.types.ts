import { GdprCookieTypes } from './useGdprConsent';

export type CookieMeta = {
  description?: string;
  name: string | RegExp | ((name: string) => boolean);
  privacyUrl?: string;
  source: string;
};

export type Cookies = Partial<Record<keyof GdprCookieTypes, Array<CookieMeta>>>;
