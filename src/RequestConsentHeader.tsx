import Stack from '@mui/material/Stack/Stack';
import React from 'react';
import { CancelIconButton } from './CancelIconButton';
import { WeUseCookiesText } from './WeUseCookiesText';

type Props = {
  onCancel: () => void;
};

export function RequestConsentHeader(props: Props) {
  const { onCancel } = props;

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      gap={2}
    >
      <WeUseCookiesText />
      <CancelIconButton onClick={onCancel} />
    </Stack>
  );
}
