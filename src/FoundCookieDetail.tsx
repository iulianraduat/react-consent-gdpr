import Box from '@mui/material/Box/Box';
import Grid from '@mui/material/Grid/Grid';
import Link from '@mui/material/Link/Link';
import { SxProps, Theme } from '@mui/material/styles';
import React from 'react';
import { NoBr } from './NoBr';
import { CookieMeta } from './ReactConsentGdpr.types';

const sx: Record<string, SxProps<Theme>> = {
  root: ({ palette }) => ({
    width: '100%',
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
  ellipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

type Props = {
  cookie: CookieMeta;
};

export function FoundCookieDetail(props: Props) {
  const { name, description, privacyUrl, source } = props.cookie;
  return (
    <Grid container sx={sx.root}>
      <Grid item sm={3} xs={12} sx={sx.ellipsis}>
        <NoBr>{name as string}</NoBr>
      </Grid>

      <Grid item sm={3} xs={12} textAlign="center" sx={sx.ellipsis}>
        {privacyUrl ? (
          <Link href={privacyUrl} target="_blank">
            <NoBr>{source}</NoBr>
          </Link>
        ) : (
          <NoBr>{source}</NoBr>
        )}
      </Grid>

      <Grid item sm={6} xs={12} display="flex" alignItems="center">
        <Box sx={sx.description}>{description}</Box>
      </Grid>
    </Grid>
  );
}
