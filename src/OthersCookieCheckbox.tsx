import React from 'react';
import { CookieMeta } from './ReactConsentGdpr.types';
import { TypeCookieCheckbox } from './TypeCookieCheckbox';

type Props = {
  checked: boolean;
  cookies: CookieMeta[];
  onChange: (id: string, checked: boolean) => void;
  onShowDetails: (category: string, foundCookies: Array<CookieMeta>) => void;
};

export function OthersCookieCheckbox(props: Props) {
  const { checked, cookies, onChange, onShowDetails } = props;

  return (
    <TypeCookieCheckbox
      id="others"
      checked={checked}
      label="Others"
      description="Others cookies are cookies that cannot be placed in any other category."
      // description="Nicht klassifizierte Cookies sind Cookies, die wir gerade versuchen zu klassifizieren, zusammen mit Anbietern von individuellen Cookies."
      cookies={cookies}
      onChange={onChange}
      onShowDetails={onShowDetails}
    />
  );
}
