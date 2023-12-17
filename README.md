# eslint-config-diner

The ESLint configuration I use for my React Typescript side projects. This does not include configuration for Prettier, Stylelint and others which has to be installed and configured separately.

# Installation

```bash
npm i --save-dev eslint eslint-config-diner
# or if you're using yarn
yarn add -D eslint eslint-config-diner
```

# Usage

In your `.eslintrc` file you can extend like this

```js
module.exports = {
  extends: ["diner"],
};
```

# What's included

- [`typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin): Powerful linting rules for Typescript
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import): auto import sorting and grouping
- [`eslint-plugin-promise`](https://www.npmjs.com/package/eslint-plugin-promise): Enforce best practices for using Promises.
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) and [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks): React-specific lint rules
