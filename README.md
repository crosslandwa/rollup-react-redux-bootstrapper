# Rollup-React-Redux bootstrapper

Quick start a [React](https://reactjs.org/)/[Redux](https://redux.js.org/introduction) application built with [Rollup](https://rollupjs.org/)

## Bootstrap a new application

Assuming you have node and npm installed, bootstrap your new application by:
```bash
mkdir my-new-app
curl -L https://github.com/crosslandwa/rollup-react-redux-bootstrapper/tarball/master | tar -xf - --strip 1 --directory my-new-app
cd my-new-app
npm install
```

Then ensure you
- update the README (by default you'll get this one!)
- change the app name in `dist/index.html`
- change the name in `package.json`

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

Lint your code by
```bash
npm run lint
```

Linting is done with [ESLint](https://eslint.org/) and is configured to make your code conform to https://standardjs.com/

### ES6ified code

Rollup is configured with the appropriate [Babel](https://babeljs.io/) plugins to let you write your app using ES6 language features. This applies to both your application code **and** your test code (*which was the main motivator for selecting Jest as the test runner*)

### Code choices

- [redux-localstorage](https://github.com/elgerlambert/redux-localstorage) is configured out of the box to maintain your application state in your browsers local storage
- CSS can be imported in your app via `import 'My.css'` - Rollup is configured to bundle CSS into your built JS artefact
- [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) extension is configured out of the box (if you have it installed in your browser)
