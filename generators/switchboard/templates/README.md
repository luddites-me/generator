# Switchboard Integration

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [`package.json` scripts](#packagejson-scripts)
- [License](#license)

## Getting Started

To get started, take a look at the documentation listed below:

- [Getting Started](docs\getting-started.md)

## Environment Variables

- `AWS_SERVERLESS_YML`: Use default value: `node_modules/@ns8/protect-sdk-switchboard/serverless.platform.yml`.
- `AWS_SERVICE_NAME`: Use default value: `ns8-switchboard-magento2`.`
- `DEV_SUFFIX`: Developer initials to use for serverless deployments (overrides `NODE_ENV` for ARNs).
- `NODE_ENV`: Environment. Default: dev. Options are: dev, test and prod.
- `NS8_CLIENT_URL`: URL for the middleware.
- `NS8_PROTECT_URL`: URL for the API.

## `package.json` scripts

- `yarn build`: Assembles `src` code into a single, minified JS module with type definitions. Exports `build` scripts into a build folder.
- `yarn build:dev`: Builds in dev mode
- `yarn build:prod`: Builds in prod mode.
- `yarn bundle`: Runs WebPack on the `src` code
- `yarn clean`: Purges all temporary folders
- `yarn count`: Counts lines of source code
- `yarn deploy`: Deploys the polling lamdbas to AWS
- `yarn docs:all`: Runs the API and standardization scripts.
- `yarn docs:api`: Creates a `project-api` Markdown in docs and an `index.d.ts` file in dist.
- `yarn docs:publish`: Publishes the assembled Markdown docs to `gh-pages` branch.
- `yarn docs:standardize`: Creates or updates a new readme with a standard set of readme sections, including a toc, yarn script documention, links to repo documentation files and an NS8 license
- `yarn generate:exports`: Generates index.ts files for all exports recursively in the 'src' folder
- `yarn lint`: Lints the codebase and the documentation
- `yarn lint:fix`: Lints the codebase and automatically fixes what it can
- `yarn sortJson`: Performs aesthetic operations to make the project files easier to navigate and read
- `yarn test`: Runs tests and calculates test coverage
- `yarn test:coverage`: Calculates test coverage
- `yarn test:debug`: Runs tests with the debugger
- `yarn undeploy`: Removes the polling lamdbas from AWS

## License

See [License](./LICENSE)
!© [Luddites](https://github.com/luddites-me)
