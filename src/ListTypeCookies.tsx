import Stack from '@mui/material/Stack/Stack';
import React, { useCallback, useState } from 'react';
import { CookiesDetailsDialog } from './CookiesDetailsDialog';
import { MarketingCookieCheckbox } from './MarketingCookieCheckbox';
import { NecessaryCookieCheckbox } from './NecessaryCookieCheckbox';
import { OthersCookieCheckbox } from './OthersCookieCheckbox';
import { PreferencesCookieCheckbox } from './PreferencesCookieCheckbox';
import { CookieMeta, Cookies } from './ReactConsentGdpr.types';
import { StatisticsCookieCheckbox } from './StatisticsCookieCheckbox';
import { GdprConsent, GdprCookieTypes, useGdprConsent } from './useGdprConsent';
import { getConsentCategories } from './utils';

type Props = {
  cookies: Cookies;
  onChange?: (consent: Array<keyof GdprCookieTypes>) => void;
};

export function ListTypeCookies(props: Props) {
  const { cookies, onChange } = props;
  const {
    necessary: cookiesNecessary,
    marketing: cookiesMarketing,
    others: cookiesOthers,
    preferences: cookiesPreferences,
    statistics: cookiesStatistics,
  } = cookies;

  const [consent, setConsent] = useGdprConsent();
  const {
    marketing = false,
    others = false,
    preferences = false,
    statistics = false,
  } = consent;

  const handleChange = useCallback(
    (id: keyof GdprCookieTypes, checked: boolean) => {
      const newConsent: GdprConsent = { ...consent };
      if (checked) {
        newConsent[id] = true;
      } else {
        delete newConsent[id];
      }

      setConsent(newConsent);
      onChange?.(getConsentCategories(newConsent));
    },
    [consent]
  );

  const [categoryAndFoundCookies, setCategoryAndFoundCookies] =
    useState<{ category: string; foundCookies: Array<CookieMeta> }>();

  const handleShowDetails = useCallback(
    (category: string, foundCookies: Array<CookieMeta>) => {
      setCategoryAndFoundCookies({ category, foundCookies });
    },
    []
  );

  const handleCloseDetails = useCallback(() => {
    setCategoryAndFoundCookies(undefined);
  }, []);

  return (
    <>
      <Stack direction="row" gap={2}>
        {cookiesNecessary && (
          <NecessaryCookieCheckbox
            cookies={cookiesNecessary}
            onShowDetails={handleShowDetails}
          />
        )}
        {cookiesPreferences && (
          <PreferencesCookieCheckbox
            checked={preferences}
            cookies={cookiesPreferences}
            onChange={handleChange}
            onShowDetails={handleShowDetails}
          />
        )}
        {cookiesStatistics && (
          <StatisticsCookieCheckbox
            checked={statistics}
            cookies={cookiesStatistics}
            onChange={handleChange}
            onShowDetails={handleShowDetails}
          />
        )}
        {cookiesMarketing && (
          <MarketingCookieCheckbox
            checked={marketing}
            cookies={cookiesMarketing}
            onChange={handleChange}
            onShowDetails={handleShowDetails}
          />
        )}
        {cookiesOthers && (
          <OthersCookieCheckbox
            checked={others}
            cookies={cookiesOthers}
            onChange={handleChange}
            onShowDetails={handleShowDetails}
          />
        )}
      </Stack>

      {categoryAndFoundCookies && (
        <CookiesDetailsDialog
          foundCookies={categoryAndFoundCookies.foundCookies}
          label={categoryAndFoundCookies.category}
          isOpen={true}
          onClose={handleCloseDetails}
        />
      )}
    </>
  );
}
