import React, { ReactNode } from 'react';
import { SxProps } from '@mui/material/styles';
import Box from '@mui/material/Box/Box';

const sx: SxProps = {
  whiteSpace: 'nowrap',
};

type Props = {
  children: ReactNode;
};

export function NoBr(props: Props) {
  const { children } = props;
  return (
    <Box component="span" sx={sx}>
      {children}
    </Box>
  );
}
