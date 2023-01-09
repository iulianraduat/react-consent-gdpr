import { useCallback, useState } from 'react';
import { getToday } from './utils';

const LOCAL_STORAGE_KEY = 'react-consent-gdpr';

export function isConsentSet(): boolean {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  return !!raw;
}

export type GdprCookieTypes = {
  marketing?: boolean;
  necessary?: boolean;
  others?: boolean;
  preferences?: boolean;
  statistics?: boolean;
};

export type GdprConsent = GdprCookieTypes & {
  lastConsentDate?: string;
};

export function useGdprConsent(): [
  GdprConsent,
  (newConsent: GdprConsent) => void
] {
  const [consent, setLocalConsent] = useState(getConsent());

  const set = useCallback((consent: GdprConsent) => {
    setConsent({ ...consent, lastConsentDate: getToday() });
    setLocalConsent(getConsent());
  }, []);

  return [consent, set];
}

function getConsent(): GdprConsent {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!raw) {
    return getAndSetEmptyConsent();
  }

  try {
    const consent: GdprConsent = JSON.parse(raw);
    return consent;
  } catch (e) {
    return getAndSetEmptyConsent();
  }
}

function setConsent(consent: GdprConsent): void {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(consent));
}

function getAndSetEmptyConsent(): GdprConsent {
  const emptyConsent: GdprConsent = {
    lastConsentDate: getToday(),
  };
  setConsent(emptyConsent);
  return emptyConsent;
}
