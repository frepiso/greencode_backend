# `@frepiso/config-commits`

This project uses the conventions outlined in [conventionalcommits.org](https://www.conventionalcommits.org/es/v1.0.0/) to create an explicit commit history that complies with [SemVer](https://semver.org/lang/es/).

## Format of the commit message

```t
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## Commit types

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **chore**: Other changes that don't modify src or test files
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **merge**: Merge two branches
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: Reverts a previous commit
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
- **wip**: Adding code (commitIgnoreRegexPattern : "^WIP ")

[More info](./CONVENTION_COMMITS.md)

## Commit Prompt

It is strongly recommended to use the following command to perform the commit process:

```bash
yarn commit
```

[More info](docs/CONTRIBUTE.md)
