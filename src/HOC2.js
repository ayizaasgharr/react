import { useState } from "react";
import HOC from "./HOC";

function HOC2(props) {
  return (
    <>
      <h1>Class1 having counter and button (HOC)</h1>

      <button onClick={props.inccounter}>button2</button>
      <p>count: {props.timer}</p>
    </>
  );
}
export default HOC(HOC2);
