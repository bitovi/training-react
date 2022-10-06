// @ts-nocheck
import ReactDOM from "react-dom/client";

// Hello World from React
const element = (
  <>
    <h2>Hello World</h2> <p>from React</p>
  </>
);

// const element = (
//   <>
//     {[1, 2, 3, 4, 5].map((number) => (
//       <button key={number} onClick={() => alert(number)}>
//         {number}
//       </button>
//     ))}
//   </>
// );

const rootNode = document.getElementById("root");
const renderRoot = ReactDOM.createRoot(rootNode);

renderRoot.render(element);
