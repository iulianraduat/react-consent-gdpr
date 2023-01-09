import Snackbar from '@mui/material/Snackbar/Snackbar';
import Stack from '@mui/material/Stack/Stack';
import React, { useCallback, useState } from 'react';
import { anchorOrigin } from './consts';
import { CookiesDetailsDialog } from './CookiesDetailsDialog';
import { ListTypeCookies } from './ListTypeCookies';
import { Cookies } from './ReactConsentGdpr.types';
import { markReload } from './reload';
import { RequestConsentHeader } from './RequestConsentHeader';
import { GdprCookieTypes, useGdprConsent } from './useGdprConsent';

type Props = {
  cookies: Cookies;
  onChange?: (consent: Array<keyof GdprCookieTypes>) => void;
};

export function RequestConsent(props: Props) {
  const { cookies, onChange } = props;

  const [consent] = useGdprConsent();

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handlePageReload = useCallback(() => {
    markReload();
    window.location.reload();
  }, [consent]);

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={null}
      message={
        <Stack direction="column">
          <RequestConsentHeader onCancel={handlePageReload} />
          <ListTypeCookies cookies={cookies} onChange={onChange} />
        </Stack>
      }
      open={isOpen}
      onClose={handleClose}
    />
  );
}
