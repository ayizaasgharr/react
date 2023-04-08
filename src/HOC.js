import { useState } from "react";

function HOC(OrginalComponent) {
  function HOC2() {
    const [count, setCount] = useState(0);

    return (
      <>
        <OrginalComponent
          inccounter={() => {
            setCount(() => count + 1);
          }}
          timer={count}
        />
      </>
    );
  }

  return HOC2;
}

export default HOC;
