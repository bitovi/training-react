## Exercise

In this exercise, we will continue building our Tic-Tac-Toe game. We will add a win check to our `handleSquareSelect` function and memoize it.

### Part One

We can play the game of Tic-Tac-Toe, but there aren’t any checks to see if someone has won. We need to update the logic in the `handleSquareSelect` function to check if there is a winner after the player has made their move. We will need the winner of the game to be held in state, so create a `winner` stateful variable inside the `Board` component. It should be of type Player.

```ts
import type { Player } from "@utilities/ticTacToe";

// ... in component

const [winner, setWinner] = useState<Player>();
```

This project comes with a function to determine whether or not there's a winner and a function to determine if the game is over. You can access them using the following imports.

```ts
import { isWinner } from "@utilities/ticTacToe";
```

The `isWinner` function accepts an `"X"` or. `"O" `(current turn), and the `board`. This function will return `true` if the passed value has won and `false` otherwise.

If this function returns `true`, set the winner variable to the player whose turn it is. We won't be using the `winner` value until the next section. However, if you want to check you have implemented it properly, you can also add:

```ts
alert(`${<player-whose-turn-it-is>} has one`)
```

### Part Two

Modify the `Board` component so its `handleSquareSelect` function uses the `useCallback` hook.

Once completed, check your work by running `npm run dev`; everything should still operate as before.
