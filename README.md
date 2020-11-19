![eslint-config-mywork](https://user-images.githubusercontent.com/22860001/97480246-e91cc200-1931-11eb-9450-70b7c6737b34.png)

# eslint-config-mywork

This package provides Mywork's .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-config-airbnb`, `eslint-plugin-jest` and `eslint-plugin-jsx-a11y`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-mywork@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-mywork
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-mywork@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-mywork;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-mywork eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-mywork
  ```
  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-mywork eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
  ```

2. Add `"extends": "mywork"` to your `.eslintrc`

### eslint-config-mywork/typescript

This entry point enables the linting rules for Typescript. To use, add `"extends": ["mywork/typescript"]` to your `.eslintrc`

