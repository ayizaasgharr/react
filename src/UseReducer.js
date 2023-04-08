import { useReducer } from "react";

const intialcount = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
  }
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, intialcount);
  return (
    <>
      <h1>BUTTON FROM useReducer hooks</h1>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
    </>
  );
}

export default UseReducer;
