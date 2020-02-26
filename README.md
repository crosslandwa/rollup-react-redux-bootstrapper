# Rollup-React-Redux bootstrapper

Quick start a [React](https://reactjs.org/)/[Redux](https://redux.js.org/introduction) application built with [Rollup](https://rollupjs.org/)

Assuming you have node and npm installed:
```bash
APP=my-new-app
mkdir $APP
curl -L https://github.com/crosslandwa/rollup-react-redux-bootstrapper/tarball/master | tar -xf - --strip 1 --directory $APP
cd $APP
unset APP
npm install
```

Then:
- update the `README.md` (by default you'll get this one!)
- change the `<title>` in `dist/index.html`
- change the `"name"` in `package.json`
- start writing your app - the entry point is `src/main.js`

## Application features

### Build

```bash
npm run build
# or
npm run watch #automatically re-build whenever changes are made
```

### Run

Open `dist/index.html` in your browser

### Tests

```bash
npm test
```
Tests are run with [Jest](https://facebook.github.io/jest/)

### Linting

```bash
npm run lint
```

Linting is done with [ESLint](https://eslint.org/) and is configured to conform code to https://standardjs.com/

### ES6ified code

Rollup is configured with the appropriate [Babel](https://babeljs.io/) plugins to write the app with ES6 language features. This applies to both application code **and** test code

### Code choices

- [redux-localstorage](https://github.com/elgerlambert/redux-localstorage) is configured out of the box to maintain application state in the browsers local storage
- CSS can be imported in the app via `import 'My.css'` - Rollup is configured to bundle CSS into the built JS artefact
- [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) extension is configured out of the box (requires dev tools be installed in the browser)
