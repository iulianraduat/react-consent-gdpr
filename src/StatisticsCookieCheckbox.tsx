import React from 'react';
import { CookieMeta } from './ReactConsentGdpr.types';
import { TypeCookieCheckbox } from './TypeCookieCheckbox';

type Props = {
  checked: boolean;
  cookies: CookieMeta[];
  onChange: (id: string, checked: boolean) => void;
  onShowDetails: (category: string, foundCookies: Array<CookieMeta>) => void;
};

export function StatisticsCookieCheckbox(props: Props) {
  const { checked, cookies, onChange, onShowDetails } = props;

  return (
    <TypeCookieCheckbox
      id="statistics"
      checked={checked}
      label="Statistics"
      description="Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously."
      cookies={cookies}
      onChange={onChange}
      onShowDetails={onShowDetails}
    />
  );
}
