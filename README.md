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

```bash
.
└── <project-root>/
    ├── .github/workflows
    ├── .husky/
    ├── .vscode/
    ├── apps/
    |   ├── api-auth/**     # Node JS api
    |   └── api-gateway/**  # Node JS api
    ├── docker/
    ├── docs/
    └── packages/
        ├── apis/
        │   ├── middlewares/
        │   ├── mocks/
        │   ├── properties/
        |   ├── controllers/
        │   └── util/
        ├── config/
        │    ├── commits/   # commit config shared across the workspaces
        │    ├── esbuild/   # esbuild-config shared across the workspaces
        │    ├── eslint/    # eslint-config shared across the workspaces
        │    ├── express/   # express config shared across the workspaces
        │    ├── jest/      # jest config shared across the workspaces
        │    ├── next/      # next config shared across the workspaces
        │    ├── react/     # react config shared across the workspaces
        │    ├── tsconfig/  # tsconfig shared across the workspaces
        │    └── vite/      # vite shared across the workspaces
        └── logger/ # isomorphic logger (a small wrapper around console.log)

```
