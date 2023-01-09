const RELOAD_KEY = 'reaload_react-consent-gdpr';

export function markReload(): void {
  localStorage.setItem(RELOAD_KEY, 'just reloaded');
}

export function isReloaded(): boolean {
  const value = localStorage.getItem(RELOAD_KEY);
  if (!value) {
    return false;
  }

  localStorage.removeItem(RELOAD_KEY);
  return true;
}
