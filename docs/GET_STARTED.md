# Get Started

## Configure Dev Environment

1. Install NVM [Official source](https://github.com/nvm-sh/nvm)

2. Install Node [Official source](https://nodejs.org/es)

3. Install Yarn [Official source](https://classic.yarnpkg.com/en/)

4. Install Turbo monorepo [Official source](https://turborepo.com/docs)

## Clone & run repository

```bash
git clone git@github.com:frepiso/greencode_backend.git
yarn            # install dependencies
yarn prepare    # install husky
turbo run lint  # run lint task
turbo run build # run build task
yarn dev        # run dev task
```

## How to install a package in a workspace

```bash
# Example: yarn workspace @frepiso/config-next add next-transpile-modules
yarn workspace <workspace> add <package>
```

## How to build a specific app/package

```bash
# Build 'my-app', letting `turbo` infer task dependencies from the pipeline defined in turbo.json
turbo run build --filter=my-app

# Build '@frepiso/bar', letting `turbo` infer task dependencies from the pipeline defined in turbo.json
turbo run build --filter=@frepiso/bar
```
