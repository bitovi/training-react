// @ts-nocheck
import ReactDOM from "react-dom/client";

const element = (
  <>
    {[1, 2, 3, 4, 5].map((number) => (
      <button key={number} onClick={() => alert(number)}>
        {number}
      </button>
    ))}
  </>
);

const rootNode = document.getElementById("root");
const renderRoot = ReactDOM.createRoot(rootNode);

renderRoot.render(element);
