//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Show a h2 that says "Good morning" color "red" if between midnight and 12 noon
// or "Good Afternoon" color "green" if between 12 noon and 6 pm
// or "Good Evening" color "blue" if between 6 pm and midnight.
//
//Created by Jai Singh.
//Copyright 2019.

ReactDOM.render(<App />, document.getElementById("root"));
