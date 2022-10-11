## Exercise

Let’s put what we just learned into action. This exercise will have two parts!

### Part One

In the same directory as the `Square` component you previously created, create a CSS module, called `Square.module.css`, that contains a class and some styling to replace the inline styles we added previously. Then add the CSS module to the `Square` component and replace the inline styles with those from the CSS module.

Double check everything is working by running `npm run dev` and navigating to the application. There should be no visible difference; however, if you open the dev tools and inspect your `Square` component, you should see there are no inline styles, but there is a class with the class name you chose with some unique identifier attached.

### Part Two

It’s time to create our board. Create two new files in the `/src` directory: `Board.tsx` and `Board.module.css`. The `Board` component should render nine `Square` components in a CSS grid provided by the `Board.module.css` module. Below is the CSS needed to get the nine `Squares` to render in a grid.

```css
.board {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
```

Once completed, go to `App.tsx` and replace the `Square` component with your newly created `Board` component.

Double check everything is working by running `npm run dev` and navigating to the application. You should see your nine Squares rendered in the middle of the screen.
