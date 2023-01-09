import Chip from '@mui/material/Chip/Chip';
import { SxProps } from '@mui/material/styles';
import React, { useCallback, useState } from 'react';
import { CookieMeta } from './ReactConsentGdpr.types';

const sx: SxProps = {
  fontSize: '70%',
};

type Props = {
  label: string;
  foundCookies: Array<CookieMeta>;
  onShowDetails: (category: string, foundCookies: Array<CookieMeta>) => void;
};

export function TypeCookieChip(props: Props) {
  const { label, foundCookies, onShowDetails } = props;

  const handleClick = useCallback(() => {
    onShowDetails(label, foundCookies);
  }, [label, foundCookies, onShowDetails]);

  return (
    <Chip
      label={foundCookies.length}
      color="primary"
      size="small"
      variant="outlined"
      clickable={foundCookies.length > 0}
      sx={sx}
      title="Click to see details"
      onClick={foundCookies.length > 0 ? handleClick : undefined}
    />
  );
}
