import React from 'react';
import { FoundCookieDetail } from './FoundCookieDetail';
import { CookieMeta } from './ReactConsentGdpr.types';

type Props = {
  foundCookies: Array<CookieMeta>;
};

export function CookiesDetails(props: Props) {
  const { foundCookies } = props;
  return (
    <>
      {foundCookies.map((foundCookie) => (
        <FoundCookieDetail
          key={foundCookie.name as string}
          cookie={foundCookie}
        />
      ))}
    </>
  );
}
