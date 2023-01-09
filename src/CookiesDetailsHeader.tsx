import Stack from '@mui/material/Stack/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import { CancelIconButton } from './CancelIconButton';

const sx: SxProps<Theme> = {
  backgroundColor: ({ palette }) => palette.background.paper,
  position: 'sticky',
  top: ({ spacing }) => spacing(2),
};

type Props = {
  label: string;
  onClose: () => void;
};

export function CookiesDetailsHeader(props: Props) {
  const { label, onClose } = props;

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={sx}
    >
      <Typography variant="body1">{label}</Typography>
      <CancelIconButton onClick={onClose} />
    </Stack>
  );
}
