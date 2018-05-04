import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Counter />
    <h2> magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
