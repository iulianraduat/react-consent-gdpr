import Box from '@mui/material/Box/Box';
import Dialog from '@mui/material/Dialog/Dialog';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogTitle from '@mui/material/DialogTitle/DialogTitle';
import React from 'react';
import { CookiesDetails } from './CookiesDetails';
import { CookiesDetailsHeader } from './CookiesDetailsHeader';
import { CookieMeta } from './ReactConsentGdpr.types';
import { SxProps } from '@mui/material/styles';

const sx: SxProps = {
  maxHeight: '80vh',
};

type Props = {
  foundCookies: Array<CookieMeta>;
  label: string;
  isOpen: boolean;
  onClose: () => void;
};

export function CookiesDetailsDialog(props: Props) {
  const { foundCookies, label, isOpen, onClose } = props;
  return (
    <Dialog
      onClose={onClose}
      open={isOpen}
      fullWidth={true}
      maxWidth="md"
      scroll="paper"
      sx={sx}
    >
      <DialogTitle>
        <CookiesDetailsHeader label={label} onClose={onClose} />
      </DialogTitle>

      <DialogContent>
        <CookiesDetails foundCookies={foundCookies} />
      </DialogContent>

      <Box>&nbsp;</Box>
    </Dialog>
  );
}
