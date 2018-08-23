# Rollup-React-Redux bootstrap

Quick start a [React](https://reactjs.org/)/[Redux](https://redux.js.org/introduction) application built with [Rollup](https://rollupjs.org/)

## Application quick start

To start your new application follow these steps:
```bash
# details to follow
```


## Application features

### Build

Build your app via
```bash
npm run build
# or
npm run build -- --watch #automatically re-build whenever changes are made
```

### Run

The app can be run by opening `./dist/index.html` in your browser

### Tests

Tests are run with [Jest](https://facebook.github.io/jest/)
```bash
npm run test
```

### Linting

Run linting against your code by
```bash
npm run lint
```

Linting is done with [ESLint](https://eslint.org/) and is configured to make your code conform to https://standardjs.com/

### ES6ified code

Rollup is configured with the appropriate [Babel](https://babeljs.io/) plugins to let you write your app using ES6 language features. This applies to both your application code **and** your test code (*which was the main motivator for selecting Jest as the test runner*)

### Code choices

- [redux-localstorage](https://github.com/elgerlambert/redux-localstorage) is configured out of the box to maintain your application state in your browsers local storage
- CSS can be imported in your app via `import 'My.css'` - Rollup is configured to bundle CSS into your built JS artefact
- [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) extensions is configured out of the box
