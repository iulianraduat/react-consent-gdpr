import Snackbar from '@mui/material/Snackbar/Snackbar';
import React, { useCallback, useMemo, useState } from 'react';
import { anchorOrigin } from './consts';
import { EditConsentButton } from './EditConsentButton';
import { isReloaded } from './reload';
import { useGdprConsent } from './useGdprConsent';

type Props = {
  autoHideDuration?: number;
  onEdit: () => void;
};

export function ConsentProvided(props: Props) {
  const { autoHideDuration = 2000, onEdit } = props;

  const [isOpen, setIsOpen] = useState(true);

  const [consent] = useGdprConsent();
  const { lastConsentDate } = consent;

  const text = useMemo(() => {
    const onDate = lastConsentDate ? ` on ${lastConsentDate}` : '';
    return `You already accepted usage of our cookies${onDate}.`;
  }, [lastConsentDate]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (isReloaded()) {
    return null;
  }

  return (
    <Snackbar
      action={<EditConsentButton onClick={onEdit} />}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      message={text}
      onClose={handleClose}
      open={isOpen}
    />
  );
}
