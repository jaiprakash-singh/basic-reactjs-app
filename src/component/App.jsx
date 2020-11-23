//Create a react app from scratch.
import React from "react";
import Heading from "./Heading";
import List from "./List";
import Greeting from "./Greeting";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Greeting />
      <Heading />
      <List />
      <Footer />
    </div>
  );
}

export default App;
