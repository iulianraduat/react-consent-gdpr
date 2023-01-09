import Tooltip from '@mui/material/Tooltip/Tooltip';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';

type Props = {
  label: string;
  tooltip: string;
};

export function TypeCookieText(props: Props) {
  const { label, tooltip } = props;

  return (
    <Tooltip arrow enterDelay={500} title={tooltip}>
      <Typography variant="body2">{label}</Typography>
    </Tooltip>
  );
}
