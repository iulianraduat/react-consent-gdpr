import React from 'react';
import { CookieMeta } from './ReactConsentGdpr.types';
import { TypeCookieCheckbox } from './TypeCookieCheckbox';

type Props = {
  cookies: CookieMeta[];
  onShowDetails: (category: string, foundCookies: Array<CookieMeta>) => void;
};

export function NecessaryCookieCheckbox(props: Props) {
  const { cookies, onShowDetails } = props;
  return (
    <TypeCookieCheckbox
      id="necessary"
      checked={true}
      label="Necessary"
      description="Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies."
      cookies={cookies}
      onShowDetails={onShowDetails}
    />
  );
}
