import { Theme } from '@mui/material/styles';
import * as React from 'react';

export type GdprCookieTypes = {
  necessary?: boolean;
  marketing?: boolean;
  others?: boolean;
  preferences?: boolean;
  statistics?: boolean;
};

export type CookieMeta = {
  description?: string;
  name: string | RegExp | ((name: string) => boolean);
  privacyUrl?: string;
  source: string;
};

export type Cookies = Partial<Record<keyof GdprCookieTypes, Array<CookieMeta>>>;

export interface ReactConsentGdprProps {
  autoHideDuration?: number;
  cookies?: Cookies;
  onChange?: (consent: Array<keyof GdprCookieTypes>) => void;
  theme?: Theme;
}

declare class ReactConsentGdpr extends React.Component<ReactConsentGdprProps> {}

declare module 'react-consent-gdpr' {}

export default ReactConsentGdpr;

export function isConsentEnabledFor(
  cookiesType: keyof GdprCookieTypes
): boolean;
