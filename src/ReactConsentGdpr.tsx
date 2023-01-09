import { Theme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { ReactConsent, ReactConsentProps } from './ReactConsent';

type Props = ReactConsentProps & {
  theme?: Theme;
};

export function ReactConsentGdpr(props: Props) {
  const { theme, ...rest } = props;

  if (theme) {
    return (
      <ThemeProvider theme={theme}>
        <ReactConsent {...rest} />
      </ThemeProvider>
    );
  }

  return <ReactConsent {...rest} />;
}

export default ReactConsentGdpr;
