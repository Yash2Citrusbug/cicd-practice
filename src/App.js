import React from "react";

import Card from "./component/Card";

import "./App.css";

const App = () => {
  return (
    <div className="wrapper flex jcc aic">
      <Card
        numberOfInput={4}
        separator={"-"}
        placeholder={"1234"}
        value={"8585"}
        isInputNum={"4575"}
        isDisabled={false}
        hasErrored={true}
      />
    </div>
  );
};

export default App;
