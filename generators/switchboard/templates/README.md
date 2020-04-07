# Switchboard Integration

## Table of Contents

- [Getting Started](#getting-started)
- [License](#license)
- [`package.json` scripts](#packagejson-scripts)

## Getting Started

To get started, take a look at the documentation listed below:

- [Getting Started](docs\getting-started.md)

## License

See [License](./LICENSE)
© [ns8inc](https://ns8.com)

## `package.json` scripts

`yarn build`

- Assembles `src` code into a single, minified JS module with type definitions. Exports `build` scripts into a build folder.
  `yarn build:dev`
- Builds in dev mode
  `yarn bundle`
- Runs WebPack on the `src` code
  `yarn clean`
- Purges all temporary folders
  `yarn count`
- Counts lines of source code
  `yarn deploy`
- Deploys the polling lamdbas to AWS
  `yarn docs:standardize`
- Creates or updates a new readme with a standard set of readme sections, including a toc, yarn script documention, links to repo documentation files and an NS8 license
  `yarn generate:exports`
- Generates index.ts files for all exports recursively in the 'src' folder
  `yarn lint`
- Lints the codebase and the documentation
  `yarn lint:fix`
- Lints the codebase and automatically fixes what it can
  `yarn sortJson`
- Performs aesthetic operations to make the project files easier to navigate and read
  `yarn test`
- Runs tests and calculates test coverage
  `yarn test:coverage`
- Calculates test coverage
  `yarn test:debug`
- Runs tests with the debugger
  `yarn undeploy`
- Removes the polling lamdbas from AWS
