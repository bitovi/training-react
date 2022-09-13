<div align="center">
  <h1>Introduction to JSX</h1>
  <strong>Learn how to use React's preferred markup syntax JSX, and combine HTML with JavaScript.</strong>
</div>

<br />
<br />

## Introduction

In this section we will look at what react is and its element API. We will then explore a simpler way to define our application using JSX. To wrap up, we will discuss what you can and can't do within JSX.

## What is React

React is a declarative front-end JavaScript library which enables developers to create interactive user interfaces. React gives you a declarative and composable API for adding to and updating application state. It is unopinionated, giving developer freedom and flexibility to implement features how they see best.

While it's most commonly used for building web apps, React can also be used to create mobile & desktop apps through React Native and Electron. Although this course will not explicitly cover them, the theory contained here will still fully apply to other environments.

## React Element API

React exposes an API for creating DOM-like elements that are then rendered into the DOM using JavaScript. For example to create an `h1` we could write the following:

```js
import React from "react";

React.createElement("h1", null, "Hello World");
```

The code above will create an `h1` with the text `"Hello World"` inside of it (`<h1>Hello World</h1>`). This is pure, vanilla JavaScript using a function `createElement` exposed by React. createElement can be used to model just about any HTML structure:

```js
React.createElement(
  "div", // Tag name
  { id: "greeting" }, // Props, referred to as "attributes" in HTML
  [
    React.createElement("h1", null, "Hello World"),
    React.createElement("p", null, "This is HTML"),
  ] // Children
);
```

The code above will produce the following HTML once rendered:

```html
<div id="greeting">
  <h1>Hello World</h1>
  <p>This is HTML</p>
</div>
```

The `createElement` function works, but as our app grows in complexity, so to will the object passed to `createElement`. To account for this, React introduces a special syntax called `JSX`

## JSX

JSX (short for JavaScript XML) is a special syntax that is transpiled, which looks almost identical to HTML.

> Transpilation

Instead of having to use the procedural `React.createElement` syntax, views can be defined and maintained in JSX and will automatically be transpiled into the equivalent React.`createElement` calls at build-time.

JSX can be written alongside standard JavaScript, which makes for a powerful programming environment. Consider the following:

```tsx
const element = <h1>JSX Example</h1>;
```

It's not really JS and its not really HTML; Instead its an amalgamation of the two. Like HTML, JSX can be nested.

```tsx
const element = (
  <div>
    <h1>Moby Dick<h1>
    <p>Call me Ishmael</p>
  </div>
)
```

## Differences With HTML

For the most part, JSX can be written exactly like the HTML you're most likely used to. There are a few differences to keep in mind however.

## Inline Styling

In a normal HTML document, inline styles can be attached directly to an element using the style attribute. CSS styles are placed inside a string and separated by semi-colons.

```html
<!-- HTML style attribute example -->
<div style="color: red; background-color: blue;">
  Inline styles are different
</div>
```

The equivalent JSX looks very similar, but the styles are stored in an object:

```tsx
// JSX style prop example
const element = (
  <div style={{ color: "red", backgroundColor: "blue" }}>
    Inline styles are different
  </div>
);
```

Notice how instead of using a string to store the styles (`style=""`) we use curly brackets (`style={}`). In JSX, we can interpolate JavaScript code into our attributes, and when doing so we use the curly bracket notation instead of quotes (quotes can be used only for string values).

The object passed into `style={}` should map css attributes to css values. This structure closely resembles the `CSSStyleDeclaration` object used by the browser to store element styles.

✏️ To see an example of this style object, run `document.body.style` in your browser console.

## Classes

In JSX, classes are specified using the `className=""` property:

```tsx
const element = <div className="button primary">So are classes</div>;
```

The reason for the discrepancy is that the React API is mirrored after the JavaScript DOM API and not after HTML itself. A lengthier description of the reasons is available on [GitHub](https://github.com/facebook/react/issues/13525#issuecomment-417818906).

## Siblings

JSX requires that any sibling elements are wrapped inside of a parent.

The following JSX would throw an error:

```tsx
const element = (
  <div>Sibling 1</div>
  <div>Sibling 2</div>
)
```

To fix it, we'd need to wrap them both in a parent:

```tsx
const element = (
  <div>
    <div>Sibling 1</div>
    <div>Sibling 2</div>
  </div>
);
```

Now they're both wrapped in a parent div and the error will go away!

## Fragments

Sometimes, you may encounter situations where wrapping your elements in an extra element is undesirable (`tr`, `td` for example). Fragments can either be written using the long-form `<React.Fragment></React.Fragment>` syntax or the shorthand `<></>`.

This JSX:

```tsx
const element = (
  <>
    <div>Sibling 1</div>
    <div>Sibling 2</div>
  </>
);
```

Will output the following HTML:

```html
<div>Sibling 1</div>
<div>Sibling 2</div>
```

Note how the fragment components don't have any corresponding DOM output. This would also be true if `<React.Fragment>` was used instead. For this reason, styles applied to a Fragment will be ignored.

Something that throws off some developers is that JSX is not our application. JSX is a description of what we want our application to be, which we then pass to react. To better understand this, let's take a look at how we can render a JSX element on screen.

## Rendering with React

There are two things React needs in order to render your application:

1. A root node
2. An element to render

The root node of the application exists in an html file. In the case of this project you can find the root node in `/src/index.html` with the `id` of `root`. When using a library like `create-react-app` or `vite` to bootstrap your application, the library will create this file you.

```html
<!DOCTYPE html>
<html lang="en">
  <!-- ... head data -->
  <body>
    <div id="root"></div>
    <!-- ... additional script loading -->
  </body>
</html>
```

The element needed to render is a JSX element, like the one we defined above.

```ts
const element = <h1>JSX Example</h1>;
```

Putting these into action, we can render a JSX element on screen.

```ts
import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1>JSX Example</h1>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(element);
```

## Exercise

Give it a try! As is tradition, let's render our first react element that renders `Hello World` in an `h2` and `from react` in a `p` below it. To begin the exercise go to `src/main.tsx`. To test out your solution run `npm run dev` and navigate to the page in your browser.

## JSX Interpolation

JSX is dynamic. You can easily insert values from variables and objects into your JSX:

```tsx
const name = "Bitovi";

const element = <div className="button primary">Welcome to {name}!</div>;
```

In the code above, use the `{name}` syntax to tell JSX that to render the value stored in the name variable into our view.

You can take this a step further by interpolating multiple values, and using JavaScript functions to transform data on the fly. Anything that goes inside `{}` is executed as normal JavaScript -- any JavaScript expression is valid inside the curly brackets.

> Expressions

```tsx
const person = {
  name: "mike",
  profession: "programmer",
};

const element = (
  <div className="button primary">
    <h1>Hi I'm {person.name.toUpperCase()}!</h1>
    <p>I'm a {person.profession} living in Philadelphia</p>
  </div>
);
```

## JSX is JavaScript

Remember, JSX is simply an alternative syntax for normal JavaScript. This means that you can use JSX as a normal value.

```tsx
const header = <h1>Hello World</h1>;
const body = <p>My name is {"Mike"}</p>;

const element = (
  <div>
    {header}
    {body}
  </div>
);
```

when rendered, page will output:

```tsx
<div>
  <h1>Hello World</h1>
  <p>My name is Mike</p>
</div>
```

Remember that underneath the syntactic sugar, JSX is nothing more than `React.createElement` calls:

```tsx
const header = React.createElement("h1", null, "Hello World");
const body = React.createElement("p", null, `Hello ${"Mike"}`);

const page = React.createElement("div", null, [header, body]);
```

## Common Pitfalls

Only expressions can be interpolated. This includes static values, variables and calls to functions. It does not include control-flow statements such as `if`, `for`, `while`. These can either be abstracted behind a function, which is then called within the JSX or be re-written in a JSX-friendly way.

A good heuristic for thinking about what can be used in JSX is,

**Only things that you could pass into a function can be used inside the brackets**.

## Conditionals

Conditionals can be re-written using the ternary operator.

```tsx
// This does not work
const element = (
  <div>
    {
      if (a === b) {
        "a and b are equal"
      } else {
        "a and b are different"
      }
    }
  </div>
)
```

But the same can be accomplished with ternaries.

```tsx
const element = (
  <div>
    {a === b // Ternaries are expressions. They return a value.
      ? "a and b are equal"
      : "a and b are different"}
  </div>
);
```

If ternaries seem excessive for any particular case, you can write all your logic in a separate function and invoke it from within JSX.

```tsx
function outputResult = () => a === b ? "a and b are equal" : "a and b are different"
const element = <div>{outputResult()}</div>
```

## Iteration

```tsx
// This does not work
<div>
  {
    for (let n of [1, 2, 3, 4]) {
      <span>n</span>
    }
  }
</div>
```

If you want to iterate within JSX, use methods such as `Array.map`, `Array.filter` and `Array.reduce`:

```tsx
// Mapping values to JSX elements

<div>
  {[1, 2, 3, 4].map((n, index) => (
    <span key={index}>{n}</span>
  ))}
</div>
```

> ✏️ Note: Keys are required for when iterating. At a high level it allows react to keep track of which elements in a list have changed.

The JSX above, creates the following html

```html
<div>
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</div>
```

### Event Handling

One of the most powerful aspects of JavaScript is that it enables developers to respond to events in the browser. With JSX it's easy to listen for and respond to these events. In React, all event names are camelCased (`onClick`, `onMouseEnter`, etc...).

```tsx
const element = (
  <div>
    <button onClick={(event) => console.log("Clicked")}>click me</button>
  </div>
);
```

In the code above, we've attached an `onClick` listener to the `<button>` element. Whenever this button gets clicked, the code inside the `onClick={...}` will get executed. The value always needs to be a function, and that function will get called with an event object.

All events supported in vanilla JavaScript are also supported in JSX.

## Exercise

Create a JSX element that loops through the numbers `1-5` and creates buttons that when clicked alert the number. To begin this exercise, remove your previous element in `src/main.tsx`. To test out your solution run `npm run dev` and navigate to the page in your browser.

## On to the Next

So far, we've seen how we can use HTML elements in JSX, but its more powerful than that. We create JSX elements by composing other JSX Elements together and defining our UI as independent and reusable pieces.To do this we use components. In the next section we will go in depth into React components.
