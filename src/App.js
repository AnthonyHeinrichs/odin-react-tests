import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("Vancouver Canucks are going to the playoffs");

  const clickHandler = () => {
    setHeading("Just kidding");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
};

export default App;