# handson-vue

This project is an toy example (To do application) on how to use VueJS using Vite (Server), PiniaJS (Store), Typescript (typing), Vitest (Unit Test) and Cypress (E2E Test).

## Prints
![Add and List View](./AddListView.png?raw=true "Add and List View")

![About View](./AboutView.png.png?raw=true "About View")

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
