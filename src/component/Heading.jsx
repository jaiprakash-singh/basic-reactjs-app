import React from "react";

const fName = "Jai";
const lName = "Singh";

function Heading() {
  return (
    <div>
      <h1 className="heading">My favorite foods</h1> by{" "}
      <b>{`${fName} ${lName}`}</b>
    </div>
  );
}

export default Heading;
export { fName, lName };
