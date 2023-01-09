import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import Link from '@mui/material/Link/Link';
import { SxProps, Theme } from '@mui/material/styles';
import React from 'react';
import { CookieMeta } from './ReactConsentGdpr.types';

const sx: Record<string, SxProps<Theme>> = {
  root: ({ palette }) => ({
    padding: 0.5,
    borderRadius: '2px',
    border: 'solid 1px transparent',
    '&:not(:last-child)': {
      marginBottom: 1,
    },
    '&:hover': {
      borderColor: palette.text.primary,
    },
  }),
  description: {
    fontSize: '70%',
  },
};

type Props = {
  cookie: CookieMeta;
};

export function FoundCookieDetail(props: Props) {
  const { name, description, privacyUrl, source } = props.cookie;
  return (
    <Grid container sx={sx.root}>
      <Grid item xs={3}>
        {name as string}
      </Grid>

      <Grid item xs={3}>
        {privacyUrl ? (
          <Link href={privacyUrl} target="_blank">
            {source}
          </Link>
        ) : (
          source
        )}
      </Grid>

      <Grid item xs={6} display="flex" alignItems="center">
        <Box sx={sx.description}>{description}</Box>
      </Grid>
    </Grid>
  );
}
