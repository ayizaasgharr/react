import { useState } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState("");
  return (
    <>
      <p>
        Controlled Component(Parent component is accessing value through props)
      </p>
      <input
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>{name}</p>
    </>
  );
}
