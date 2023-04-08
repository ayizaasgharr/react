import { Ref, useRef, useState } from "react";

export default function UncontrolledComponent() {
  const User = useRef("");
  const [showResult, setshowResult] = useState(false);
  function showrefResult() {
    setshowResult(true);
  }
  return (
    <>
      <p>uncontrolled component (Can access state through dom).</p>
      <input type="text" ref={User} />
      <button onClick={showrefResult}>Submit</button>
      <p>User {User.current.value}</p>
    </>
  );
}
