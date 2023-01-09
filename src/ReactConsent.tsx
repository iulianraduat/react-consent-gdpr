import React, { useCallback, useState } from 'react';
import { ConsentProvided } from './ConsentProvided';
import { Cookies } from './ReactConsentGdpr.types';
import { RequestConsent } from './RequestConsent';
import { GdprCookieTypes, isConsentSet } from './useGdprConsent';

const defaultCookies: Cookies = {
  marketing: [],
  necessary: [],
  // others: [],
  preferences: [],
  statistics: [],
};

export type ReactConsentProps = {
  autoHideDuration?: number;
  cookies?: Cookies;
  onChange?: (consent: Array<keyof GdprCookieTypes>) => void;
};

export function ReactConsent(props: ReactConsentProps) {
  const { autoHideDuration, cookies = defaultCookies, onChange } = props;

  const [editConsent, setEditConsent] = useState(!isConsentSet());

  const handleEditConsent = useCallback(() => {
    setEditConsent(true);
  }, []);

  return editConsent ? (
    <RequestConsent cookies={cookies} onChange={onChange} />
  ) : (
    <ConsentProvided
      autoHideDuration={autoHideDuration}
      onEdit={handleEditConsent}
    />
  );
}
