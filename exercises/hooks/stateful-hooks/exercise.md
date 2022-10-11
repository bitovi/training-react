## Exercise

Let's use our stateful hooks knowledge to make our Tic-Tac-Toe game more functional! To do this, we will have to do a couple of things. This exercise will be broken into three parts.

### Part One

We need to modify the `Board` component to keep track of the game’s current state using the stateful hooks we just learned about. The games state should be called `board` and have the following shapes, and should default to an array with nine nulls.

```ts
import type { TicTacToeBoard } from "@utilities/ticTacToe";
```

it has the following shape:

```ts
export type Player = "X" | "O";
export type BoardSquareValues = Player | null;
export type TicTacToeBoard = BoardSquareValues[];
```

Once the `board` variable has been created, use it to create the nine `Squares`, which should render the value of the board at its index.

Additionally, tic-tac-toe is a turn-based game that alternates between two players. We need a way to track which player’s turn it is. Inside the `Board` component, create another stateful variable called `isX`, a `boolean` representing whether or not it is `X`’s turn to go.

Once completed, double-check everything works by running `npm run dev` and navigating to your application. You should see your board without any values.

### Part Two

We need a way to select our `Square` components to make our game interactive. We will need to add a prop to our `Square` component called `onSquareSelect`. It should be a function that doesn't accept arguments and returns void.

```ts
interface SquareProps {
  onSquareSelect: () => void;
  value: BoardSquareValue;
}
```

Inside the `Square` component, add an `onClick` prop to the parent element and invoke the `onSquareSelect` prop.

### Part Three

It’s time to make our game interactive! To do this, we must define a function that updates our board with the proper value. In the `Board` component and add a `handleSquareSelect` function.

```ts
const handleSquareSelect = (selectedSquare: number) => {
  // add logic here
};
```

This function should:

- Check to make sure the selectedSquare hasn’t already been selected.

- Update the board state by setting selectedIndex on the board to either X or O based on whose turn it is.

- Change whose turn it is

Once `handleSquareSelect` is defined, find a way to pass `handleSquareSelect` to the `onSquareSelect` prop to the `Square` component.

Once completed, double-check everything works by running `npm run dev` and navigating to your application. You should now be able to click on squares and get an `X` or an `O` to appear, based on whichever turn it is.
