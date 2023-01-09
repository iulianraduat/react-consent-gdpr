import React from 'react';
import { CookieMeta } from './ReactConsentGdpr.types';
import { TypeCookieCheckbox } from './TypeCookieCheckbox';

type Props = {
  checked: boolean;
  cookies: CookieMeta[];
  onChange: (id: string, checked: boolean) => void;
  onShowDetails: (category: string, foundCookies: Array<CookieMeta>) => void;
};

export function MarketingCookieCheckbox(props: Props) {
  const { checked, cookies, onChange, onShowDetails } = props;

  return (
    <TypeCookieCheckbox
      id="marketing"
      checked={checked}
      label="Marketing"
      description="Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers."
      cookies={cookies}
      onChange={onChange}
      onShowDetails={onShowDetails}
    />
  );
}
