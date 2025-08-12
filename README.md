# greencode_backend

## About the project

This project uses:

- Conventional Commits. [Official source](https://www.conventionalcommits.org/en/v1.0.0/)

  The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history.

- Semantic Releases [Official source](https://github.com/semantic-release/semantic-release)

  It automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package.

- Turborepo [Official source](https://turborepo.com/)

  A build system for JavaScript and TypeScript codebases

## Getting started

- Development statrting guide [more info](./docs/GET_STARTED.md)

## Contribute

- Contribute commit guide [more info](./docs/GET_STARTED.md)

```bash
# Must follow the Convention Commits
yarn commit
```

```bash
# types: build, chore, ci, docs, feat, fix, merge, perf, refactor, revert, style, test, wip
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## Workspaces structure

```scaffolding
.
└── <project-root>/
    ├── .github/workflows
    ├── .vscode/
    ├── apps/
    │   ├── api-auth/**       # Node JS api
    │   └── api-gateway/**    # Node JS api
    ├── docs/
    └── packages/
        ├── apis/
        │   ├── controllers/
        │   ├── middlewares/
        │   ├── mocks/
        │   ├── server/
        │   └── services/
        ├── apps/
        ├── config/
        │    ├── commits/       # commit dependencies and config shared across the workspaces
        │    ├── esbuild/       # esbuild dependencies and config shared across the workspaces
        │    ├── eslint/        # eslint dependencies and config shared across the workspaces
        │    ├── express/       # express dependencies and config shared across the workspaces
        │    ├── jest/          # jest dependencies and config shared across the workspaces
        │    ├── react/         # react dependencies and config shared across the workspaces
        │    └── typescript/    # typescript dependencies and config shared across the workspaces
        ├── shared/             # shared enums, types, properties and entities
        └── tools/
              ├── logger/       # isomorphic logger (a small wrapper around console.log)
              └── testcoverage  # test coverage tool

```
