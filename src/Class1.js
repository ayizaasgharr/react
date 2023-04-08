import { useState, useContext, createContext } from "react";

const Context = createContext();
function Component1() {
  const [User, setUser] = useState("ayiza");
  return (
    <Context.Provider value={User}>
      <div>
        <h1>WITH CONTEXT HOOK</h1>
        <h1> component 1 declares User</h1>
        <Component2 user={User} />
      </div>
    </Context.Provider>
  );
}
function Component2() {
  return (
    <div>
      <h2> component 2 doesn't need the user</h2>
      <Component3 />
    </div>
  );
}
function Component3() {
  return (
    <div>
      <h3> component 3 doesn't need the user</h3>
      <Component4 />
    </div>
  );
}
function Component4() {
  const user = useContext(Context);

  return (
    <div>
      <h4>component 4 retrieve the user {user}</h4>
    </div>
  );
}

function Class1() {
  return (
    <>
      <Component1 />
    </>
  );
}
export default Class1;
