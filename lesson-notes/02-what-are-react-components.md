<div align="center">
  <h1>What are React Components</h1>
  <strong>Learn about the two ways of writing React components and their differences.</strong>
</div>

<br />
<br />

## Introduction

## What are Components?

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. There are two types of components: functional and class components. In the case of class component are contained in a class and have a render method which returns JSX.

```tsx
class MyClassComponent extends React.Component {
  render() {
    return <div>hello world</div>;
  }
}
```

And functional components are JavaScript functions that accept inputs as an object, colloquially referred to as props, and return JSX.

```tsx
function MyFunctionalComponent() {
  return <div>Hello World</div>;
}
```

Originally, class components were the most popular because they could keep track of state and respond to specific component lifecycle events. This wasn't possible in functional components until the release of the React Hooks API in v16. Up until then, functional components were commonly referred to as **stateless** components.

Now both class and functional components are used commonly in codebases around the world, but there has been a shift to using only functional components, as the syntax for them is more readable and cleaner.

For the remainder of this training, we will be using functional components exclusively.

Component names must be Uppercased and can be used as JSX. Additionally, they are composable, meaning you can use Components inside of other components. Here is an example "Hello World" component, that also prints a name. It is being used inside of another component named "App".

```tsx
interface HelloWorldProps {
  name: string;
}

function HelloWorld(props: HelloWorldProps) {
  return <div>Hello World, my name is {props.name}</div>;
}

function App() {
  return (
    <div>
      <HelloWorld name="Dan" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

As we can see, the `HelloWorld` component is a function and the first letter is capitalized. If a component name is all lowercase, React assumes that it is a normal HTML tag (like `span`, or `div`).

> The React community has centered around the convention of using PascalCase to name components. As far as React is concerned though, your component simply needs to begin with a capital letter to be treated as a custom component.

Additionally, the `HelloWorld` component is being used directly inside the `App` component, right next to normal HTML.

To drive the point home further, Imagine we created a component named lowercase div. In this case, React wouldn't be able to tell the difference between a normal div and our component div since we use them identically. Hence the capitalization.

We can pass attribute-like values to our components. These are called `props` which is short for properties. Often these props are deconstructed in the function signature.

```tsx
interface HelloWorldProps {
  name: string;
}

function HelloWorld({ name }: HelloWorldProps) {
  return <div>Hello World, my name is {name}</div>;
}
```

In the example above we pass `name` to our HelloWorld component in the app component.

```tsx
function App() {
  return (
    <div>
      <HelloWorld name="Dan" />
    </div>
  );
}
```

These HTML attribute-like descriptors are props, and React does the work of wrapping them in an object, and supplying them as the first argument to the `HelloWorld` component for us.

As previously mentioned, components allow us to reuse logic. Let's see that in action. Say we want to say hello world to a bunch of different people, all we need to do is add more instances of the `HelloWorld` component to our app. We can do that by adding more ourselves,

```tsx
function App() {
  return (
    <div>
      <HelloWorld name="Dan" />
      <HelloWorld name="Michael" />
      <HelloWorld name="Tony" />
    </div>
  );
}
```

or by looping through values.

```tsx
function App() {
  return (
    <div>
      {["Dan", "Michael", "Tony"].map((name) => {
        return <HelloWorld key={name} name={name} />;
      })}
    </div>
  );
}
```

Since components are functions, they can be defined and imported just like you would any other function.

## Exercise

Let's begin making our tic-tac-toe game.

In this exercise, you will be creating a component that is a single square. This component will be able to take a single prop:

- value - a `string` that will be a single character displayed in the center of the square.

The `Square` component should have a `backgroundColor` of your choice and include the following styles.

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

To get started, create a new file in `src/` called `Square.tsx`. Once completed, import the `Square` component into `App.tsx` and use your newly built `Square` component to display an `X`.

Double check everything is working by running `npm run dev` and navigating to the application. There should be a box with the color of your choosing with an `X` in the middle of it.
