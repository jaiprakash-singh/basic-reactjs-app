import React from "react";
import * as pi from "./math";
import * as Calc from "./calculator";

const i = 5,
  j = 2;
function List() {
  return (
    <div>
      <ul>
        <li>Paneer Tikka</li>
        <li>Rasmalai</li>
        <li>Baby Surmai</li>
      </ul>
      <br />
      <ul>
        <li>{pi.default}</li>
        <li>{pi.doublePi()}</li>
        <li>{pi.triplePi()}</li>
      </ul>
      <br />
      <ul>
        <li>Add: {Calc.add(i, j)}</li>
        <li>Substract: {Calc.substract(i, j)}</li>
        <li>Multiply: {Calc.multiply(i, j)}</li>
        <li>Divide: {Calc.divide(i, j)}</li>
      </ul>
    </div>
  );
}

export default List;
