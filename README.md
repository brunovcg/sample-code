# Code Sample (Bruno Gouveia)

Project using Typescript, Styled Component for Styling.
Code quality is checked by Prettier, ESLint, Sonar Lint, Unit Tests with React Test Library, all of those
called before a commit using Husky and Lint-stage libs.
Also it is installed Storybook to easily test manually some components.

## Husky

This application makes use of husky and pre-commit hooks. It will run tests and do a lint check (considering prettier, sonar and lint rules) before allowing commits. You might need to run the following commands to give permissions:

```shell
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

## Features

### Dialog Manager

A dialog manager to easily instantiate dialogs and call oor close them from anywhere in the code.
It uses typescript to safe instantiate the registered dialogs

[Dialog](./src/dialog/README.md)

### Icon Component

A custom Icon component integrated with an external library
It uses typescript to safe instantiate the registered icons

[Icon](./src/components/icon/README.md)

### Custom Hooks

Custom made hooks to share react based logic.

[Hooks](./src/hooks/index.ts)

### Styled Components

Using a global style file to standardise variables

[Global Styles](./src/styles/index.ts)

To create Color Variants just add the name and color hexadecimal as string. It will add to types and css:

```js

const colorVariants = {
  primary: "#11A2DD",
  grey: "#888",
  error: "#E12F26",
  disabled: "#CCCCCC",
} as const;

```

## How to Install the project to run Locally:

Node is required:
[Node](https://nodejs.org/en/download/package-manager)

```bash
npm run i
```

## How to Run the project to run Locally:

It will open on localhost:3000

```bash
npm run start
```

## How to Run Storybook to run Locally:

It will open on localhost:6006

```bash
npm run storybook
```

## How to Run Tests to run Locally:

It will open on localhost:6006

```bash
npm run test
```
