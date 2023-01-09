import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ReactConsentGdpr from '../src/ReactConsentGdpr';

const style: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(300px ,500px))',
};

export default {
  title: 'ReactConsentGdpr',
  component: ReactConsentGdpr,
} as ComponentMeta<typeof ReactConsentGdpr>;

export const DefaultCookieCategories: ComponentStory<typeof ReactConsentGdpr> =
  () => (
    <div style={style}>
      <ReactConsentGdpr />
    </div>
  );

export const AllCookieCategories: ComponentStory<typeof ReactConsentGdpr> =
  () => (
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
          // others: [],
          preferences: [],
          statistics: [],
        }}
      />
    </div>
  );

export const CustomCookieCategories: ComponentStory<typeof ReactConsentGdpr> =
  () => (
    <div style={style}>
      <ReactConsentGdpr
        cookies={{
          necessary: [],
          statistics: [],
        }}
      />
    </div>
  );

export const CustomAutoHide: ComponentStory<typeof ReactConsentGdpr> = () => (
  <div style={style}>
    <ReactConsentGdpr autoHideDuration={6000} />
  </div>
);

export const MatchCookiesInACategoryByName: ComponentStory<
  typeof ReactConsentGdpr
> = () => (
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

export const MatchCookiesInACategoryByARegexp: ComponentStory<
  typeof ReactConsentGdpr
> = () => (
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

export const MatchCookiesInACategoryByAValidationFunction: ComponentStory<
  typeof ReactConsentGdpr
> = () => (
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

export const CookiesDetailsWithPrivacyUrl: ComponentStory<
  typeof ReactConsentGdpr
> = () => (
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
