import { GdprConsent, GdprCookieTypes } from './useGdprConsent';

export function getCookiesNames(): Array<string> {
  if (!document.cookie) {
    return [];
  }

  const cookies: Array<string> = [];
  const split = document.cookie.split(';');
  for (let i = 0; i < split.length; i++) {
    const nameValue = split[i].split('=');
    nameValue[0] = nameValue[0].replace(/^ /, '');
    cookies.push(decodeURIComponent(nameValue[0]));
  }
  return cookies;
}

export function getToday(): string {
  const nowTs = new Date();
  const year = nowTs.getFullYear();
  const month = nowTs.getMonth() + 1;
  const day = nowTs.getDate();
  const today = `${year}-${getWith2Digits(month)}-${getWith2Digits(day)}`;
  return today;
}

function getWith2Digits(x: number): string {
  return x < 10 ? `0${x}` : `${x}`;
}

export function getConsentCategories(
  consent: GdprConsent
): Array<keyof GdprCookieTypes> {
  const arr: Array<keyof GdprCookieTypes> = [];
  if (consent.marketing) {
    arr.push('marketing');
  }
  if (consent.necessary) {
    arr.push('necessary');
  }
  if (consent.others) {
    arr.push('others');
  }
  if (consent.preferences) {
    arr.push('preferences');
  }
  if (consent.statistics) {
    arr.push('statistics');
  }
  return arr;
}
