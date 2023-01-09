import React from 'react';
import { CookieMeta } from './ReactConsentGdpr.types';
import { TypeCookieCheckbox } from './TypeCookieCheckbox';

type Props = {
  checked: boolean;
  cookies: CookieMeta[];
  onChange: (id: string, checked: boolean) => void;
  onShowDetails: (category: string, foundCookies: Array<CookieMeta>) => void;
};

export function PreferencesCookieCheckbox(props: Props) {
  const { checked, cookies, onChange, onShowDetails } = props;

  return (
    <TypeCookieCheckbox
      id="preferences"
      checked={checked}
      label="Preferences"
      description="Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in."
      cookies={cookies}
      onChange={onChange}
      onShowDetails={onShowDetails}
    />
  );
}
