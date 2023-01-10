import Stack from '@mui/material/Stack/Stack';
import Switch from '@mui/material/Switch/Switch';
import React, { useCallback, useMemo } from 'react';
import { GdprCookieTypes } from './useGdprConsent';
import { TypeCookieLabel } from './TypeCookieLabel';
import { getCookiesNames } from './utils';
import { CookieMeta } from './ReactConsentGdpr.types';
import { isMatch } from './TypeCookieCheckbox.utils';

type Props = {
  checked: boolean;
  cookies: CookieMeta[];
  description: string;
  id: keyof GdprCookieTypes;
  label: string;
  onChange?: (id: keyof GdprCookieTypes, checked: boolean) => void;
  onShowDetails: (category: string, foundCookies: Array<CookieMeta>) => void;
};

export function TypeCookieCheckbox(props: Props) {
  const {
    checked,
    cookies: knownCookies,
    description,
    id,
    label,
    onChange,
    onShowDetails,
  } = props;

  const foundCookies = useMemo(() => {
    const foundCookies: Array<CookieMeta> = [];
    const cookies = getCookiesNames();
    cookies.forEach((cookie) => {
      const found = knownCookies.find(({ name }) => isMatch(cookie, name));
      if (found) {
        foundCookies.push({ ...found, name: cookie });
      }
    });
    return foundCookies;
  }, [knownCookies]);

  const handleChange = useCallback(
    (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      onChange?.(id, checked);
    },
    [id, onChange]
  );

  return (
    <Stack direction="row">
      <Switch
        checked={checked}
        disabled={onChange === undefined}
        onChange={handleChange}
      />

      <TypeCookieLabel
        foundCookies={knownCookies.length > 0 ? foundCookies : undefined}
        label={label}
        tooltip={description}
        onShowDetails={onShowDetails}
      />
    </Stack>
  );
}
