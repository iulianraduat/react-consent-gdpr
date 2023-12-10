import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ReactConsentGdpr from '../src/ReactConsentGdpr';

const style: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(300px ,500px))',
};

const meta: Meta<typeof ReactConsentGdpr> = {
  title: 'ReactConsentGdpr',
  component: ReactConsentGdpr,
} as Meta<typeof ReactConsentGdpr>;
export default meta;
type Story = StoryObj<typeof ReactConsentGdpr>;

export const DefaultCookieCategories = () => (
  <div style={style}>
    <ReactConsentGdpr />
  </div>
);

export const AllCookieCategories = () => (
  <div style={style}>
    <ReactConsentGdpr
      cookies={{
        marketing: [],
        necessary: [
          {
            name: '_pk_id.8.1fff',
            source: 'Matomo',
            description:
              '13 months (used to store a few details about the user such as the unique visitor ID)',
          },
        ],
        others: [],
        preferences: [],
        statistics: [],
      }}
    />
  </div>
);

export const CustomCookieCategories = () => (
  <div style={style}>
    <ReactConsentGdpr
      cookies={{
        necessary: [],
        statistics: [],
      }}
    />
  </div>
);

export const CustomAutoHide = () => (
  <div style={style}>
    <ReactConsentGdpr
      cookies={{
        necessary: [
          {
            name: '_pk_id.8.1fff',
            source: 'Matomo',
            description:
              '13 months (used to store a few details about the user such as the unique visitor ID)',
          },
        ],
      }}
    />
  </div>
);

export const MatchCookiesInACategoryByARegexp = () => (
  <div style={style}>
    <ReactConsentGdpr
      cookies={{
        necessary: [
          {
            name: /^_pk_id\./,
            source: 'Matomo',
            description:
              '13 months (used to store a few details about the user such as the unique visitor ID)',
          },
        ],
      }}
    />
  </div>
);

export const MatchCookiesInACategoryByAValidationFunction = () => (
  <div style={style}>
    <ReactConsentGdpr
      cookies={{
        necessary: [
          {
            name: (name: string) => /^_pk_id\./.test(name),
            source: 'Matomo',
            description:
              '13 months (used to store a few details about the user such as the unique visitor ID)',
          },
        ],
      }}
    />
  </div>
);

export const CookiesDetailsWithPrivacyUrl = () => (
  <div style={style}>
    <ReactConsentGdpr
      cookies={{
        necessary: [
          {
            name: (name: string) => /^_pk_id\./.test(name),
            source: 'Matomo',
            description:
              '13 months (used to store a few details about the user such as the unique visitor ID)',
            privacyUrl: 'https://matomo.org/privacy-policy/',
          },
        ],
      }}
    />
  </div>
);
