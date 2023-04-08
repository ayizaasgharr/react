import { useState } from "react";
import HOC from "./HOC";

function HOC1(props) {
  return (
    <>
      <h1>Class2 having counter and button (HOC)</h1>

      <button onClick={props.inccounter}>button1</button>
      <p>count: {props.timer}</p>
    </>
  );
}
export default HOC(HOC1);
