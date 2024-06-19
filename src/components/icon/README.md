# Icon Component

A reusable component that in this project is using Phosphor Icon, but it is easily changeable with Google Icons for example.

## Registering an icon

Go to [Icon Registration](./Icon.registration.ts) and set a name for the icon and a component from the lib that it will reflect

Lib: [Phosphor](https://phosphoricons.com/), there you can search icons and import each you need

```js

import { CheckCircle, X } from "@phosphor-icons/react";

export const icons = {
  close: X,
  done: CheckCircle,
} as const;

```

## Using

Inside a component just call. You have to pass the name of the icon as a props. Also
There ate many optional props as: mirrored, size, variant, weight

```js
<Icon icon="close" variant="primary" />
```
