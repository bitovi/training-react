// @ts-nocheck
import ReactDOM from "react-dom/client";

// Hello World from React
const element = (
  <>
    <h2>Hello World</h2> <p>from React</p>
  </>
);

const rootNode = document.getElementById("root");
const renderRoot = ReactDOM.createRoot(rootNode);

renderRoot.render(element);
