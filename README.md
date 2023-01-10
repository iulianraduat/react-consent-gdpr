# react-consent-gdpr ![Weekly downloads](https://img.shields.io/npm/dw/react-consent-gdpr 'Weekly downloads')

A react component for managing the user consent related to GDPR. The messages are displayed in a snackbar at the bottom of the screen.

The consent is saved in the local storage of the browser so if the user uses different browers
then it can have different set of consent usage of the cookies.
There is no value sent automatically to the server.

This component allows to the user to change the previous made consent as easy as it was when it did it.

Being "forced" to define all used cookies, so that ReactConsentGdrp find them, shows that you know what your web site is doing.

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/react-consent-gdpr/).

## Props

| Name             | Type                                     | Required | Default | Description                                                |
| ---------------- | ---------------------------------------- | -------- | ------- | ---------------------------------------------------------- |
| autoHideDuration | number                                   | no       | 2000    | The delay in ms after which the info dialog is auto-closed |
| cookies          | Cookies                                  | no       | \*      | The list of cookies grouped by category                    |
| onChange         | (consent: Array<CookieCategory>) => void | no       | -       | Callback to notify changes of consent                      |
| theme            | Theme                                    | no       | -       | A Material-UI theme                                        |

Note\*: The default categories are Necessary, Preferences, Statistics and Marketing.

The type Cookies is an object which accepts one of the following keys and as value an array having objects containing the bellow fields.

The allowed keys: marketing, necessary, others, preferences, statistics.

The fields accepted in the objects used as values:

| Name        | Type                                          | Required | Default | Description                                         |
| ----------- | --------------------------------------------- | -------- | ------- | --------------------------------------------------- |
| description | string                                        | no       | -       | A short description of the cookie                   |
| name        | string \| RegExp \| (name: string) => boolean | yes      | -       | The cookie name (exact/regexp/validation function)  |
| privacyUrl  | string                                        | no       | -       | A link to the site were is explained how it is used |
| source      | string                                        | yes      | -       | Which web site set/use it                           |

There is also provided a function to check if a category of cookies is accepted:

```javascript
isConsentEnabledFor(cookiesCategory: CookieCategory): boolean;
```

The CookieCategory means one of the following values: marketing, necessary, others, preferences, or statistics.

---

### Screenshot

Bellow you can see how it looks:

![Consent already provided](images/consented.png 'Consent already provided')

![Require consent](images/mixed-chips.png 'Require consent')

![Require consent](images/require-consent.png 'Require consent')

![Detail of cookies from one category](images/cookie-details.png 'Detail of cookies from one category')

---

## Versions

| ReactConsentGdpr _uses_ | React  | MaterialUI |
| ----------------------: | :----: | :--------: |
|                   1.0.x | 18.0.0 |   5.11.3   |

### About versioning schema used for ReactConsentGdpr

- Major - it will be increased when the major version of the dependat package changes or there are breaking changes in the code of ReactConsentGdpr
- Minor - it will be increased when no major version of the dependat package changes, but there are changes of the minor or patch versions of them
- Minor - it will be increased when it is added functionality in a backward compatible manner
- Patch - it will be increased when are made backward compatible bug fixes

---

## Example

Usage:

```js
import * as React from 'react';
import ReactConsentGdpr from 'react-consent-gdpr';

class App extends React.Component {
  render() {
    return (
      <div className="App" style={style}>
        <ReactConsentGdpr />
      </div>
    );
  }
}

export default App;
```

---

## Changelog

### 1.0.0

- react-consent-gdpr is made publicly available
- All messages are only in english and cannot be changed

### 1.1.0

- Added a function to check if a cookies category is accepted

### 1.1.1

- Fixed the typedef for isConsentEnabledFor

### 1.2.0

- Do not display the number of cookies for a category defined without a list of cookies
- Fixed the display on mobile devices
