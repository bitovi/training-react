Exercise

Let's begin making our tic-tac-toe game. Before we begin, check out the following branch: `what-are-react-components`

```sh
git checkout what-are-react-components
```

In this exercise, you will be creating a component that is a single square. This component will be able to take a single prop:

- `value` - a `BoardSquareValue` that will be displayed in the center of the square.

You can access the `BoardSquareValue` type by:

```ts
import type { BoardSquareValue } from "@utilities/ticTacToe";
```

The `Square` component should have a `backgroundColor` of your choice and include the following inline-styles.

```ts
const squareStyles = {
  height: "150px",
  width: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "5em",
};
```

To get started, create a new file in `src/` called `Square.tsx`. Once completed, import the `Square` component into `App.tsx` and use your newly built square component to display an `X`.

Double check everything is working by running `npm run dev` and navigating to the application. There should be a box with your chosen color and an `X` in the middle.
