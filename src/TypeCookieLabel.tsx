import Stack from '@mui/material/Stack/Stack';
import { SxProps } from '@mui/material/styles';
import React from 'react';
import { CookiesDetailsDialog } from './CookiesDetailsDialog';
import { CookieMeta } from './ReactConsentGdpr.types';
import { TypeCookieChip } from './TypeCookieChip';
import { TypeCookieText } from './TypeCookieText';

const sx: SxProps = {
  alignItems: 'center',
};

type Props = {
  foundCookies: Array<CookieMeta>;
  label: string;
  onShowDetails: (category: string, foundCookies: Array<CookieMeta>) => void;
  tooltip: string;
};

export function TypeCookieLabel(props: Props) {
  const { foundCookies, label, onShowDetails, tooltip } = props;
  return (
    <Stack direction="row" gap={0.5} sx={sx}>
      <TypeCookieText tooltip={tooltip} label={label} />
      <TypeCookieChip
        label={label}
        foundCookies={foundCookies}
        onShowDetails={onShowDetails}
      />
    </Stack>
  );
}
