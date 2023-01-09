import Tooltip from '@mui/material/Tooltip/Tooltip';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';

const TOOLTIP =
  'We use cookies to personalize content and ads, provide social media features and to analyze the access to our website.' +
  ' In addition, we provide information about your use of our website to our social media partners, advertising and analysis.' +
  ' Our partners may combine this information with other data you provide to them or that they have collected as part of your use of their services.';

export function WeUseCookiesText() {
  return (
    <Tooltip title={TOOLTIP}>
      <Typography component="span" variant="body2">
        Our web site uses the following types of cookies:
      </Typography>
    </Tooltip>
  );
}
