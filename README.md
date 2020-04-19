# Code Coverage Danger JS plugin

## Description

This plugin analyzes your last pull request, and displays the code coverage on the new files and modified files you just wrote

## Installation

You need to [install Danger JS](https://danger.systems/js/guides/getting_started.html) first:

```sh
yarn add -D danger
```

Then add this package

```sh
yarn add -D code-coverage-dangerjs-plugin
```

## Usage

- Create a dangerfile (dangerfile.js or dangerfile.ts at the root of your project folder)
- Edit it with

```javascript
import { sendCoverageMessage } from "code-coverage-dangerjs-plugin";

sendCoverageMessage();
```

- Run **locally** to test if it works

```sh
yarn danger local
```

You should see some lines in your terminal

- Run with your **Continuous Integration** system:

  - Follow the steps described in the "Setting up Danger to run on your CI" section of the [GETTING STARTED WITH DANGER JS](https://danger.systems/js/guides/getting_started.html) page
  - [Generate a new GitHub Token](https://github.com/settings/tokens)
  - Add it in your CI environment

Example for Circle CI:

```yaml
version: 2
jobs:
build:
  steps:
    - run: ... YOUR OTHER STEPS ...
    - run:
        name: Run Danger
        command: yarn danger ci
        environment:
          DANGER_GITHUB_API_TOKEN: YOUR_GITHUB_TOKEN
```

- Push a new PR and run the CI on it.
- Go see your pull request with a useful comment!

* ⭐️Add a star on [this repo](https://github.com/Spoutnik97/code-coverage-dangerjs-plugin) if you like it ;)
