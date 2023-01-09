import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton/IconButton';
import React from 'react';

type Props = {
  onClick: () => void;
};

export function CancelIconButton(props: Props) {
  const { onClick } = props;

  return (
    <IconButton size="small" onClick={onClick} title="Close">
      <CancelIcon color="primary" />
    </IconButton>
  );
}
