## Exercise

Before we begin, we need some additional materials. So checkout context in the repo.

```sh
git checkout context
```

Running the new code, we can see a couple of things have changed in our application: some game information and a scoreboard. Currently, the scoreboard does not work. We would like it to update the scoreboard whenever a game is won. Let’s use what we have learned about context to accomplish this. This exercise will have two parts – creating the context and consuming it.

### Part One

To get started, create a `scoreContext.tsx` file in the `src/components/Score` directory. In this file, let's create a `ScoreContext` that has the following shape:

```ts
interface ScoreContext {
  xWins: number;
  oWins: number;
  addWinX: () => void;
  addWinO: () => void;
}
```

Once the context is created, create a custom provider and hook to help developers consume the context.

The provider should be called `ScoreProvider` and have two stateful variables which track the number of wins either `X` or `O` have and two helper functions to increment them by one.

The custom hook should be named `useScore` and ensure the developer uses it within the custom provider and return the context's values.

### Part Two

Now that we have created our context, it’s time to consume it. To do this, first, we need to set up the provider. In `App.tsx` import the provider from part one and wrap the rest of the application. Now that the application has access to the values in `ScoreContext`, it's time to use them.

Update the `Score` component inside `src/components/Score/Score.tsx` to use the custom `useScore` hook. Replace the hardcoded values with the values from the hook.

Update the `useTicTacToe` hook to use the custom `useScore` hook. Whenever a winner is determined, update the win logic to increment the score for the winner.

To check if things are working properly, run `npm run dev`, and navigate to your application. Play a couple of games and see if the score increments properly.
