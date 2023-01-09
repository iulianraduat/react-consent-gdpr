import Button from '@mui/material/Button/Button';
import React from 'react';

type Props = {
  onClick: () => void;
};

export function EditConsentButton(props: Props) {
  const { onClick } = props;
  return <Button onClick={onClick}>Change consent</Button>;
}
