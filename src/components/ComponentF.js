import React, { useContext } from "react";
import { CountContext } from "../App";
function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
        Component F
      <button onClick={() => countContext.stateDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.stateDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.stateDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentF;
