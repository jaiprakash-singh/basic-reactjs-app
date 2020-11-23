import React from "react";

const currentDate = new Date();

function Greeting() {
  const currentHour = currentDate.getHours();
  var greeting = "";

  const customStyle = {
    color: "green",
    fontSize: "30px",
    border: "1px solid green"
  };

  if (currentHour < 12) {
    greeting = "Good Morning";
    customStyle.color = "orange";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Evening";
    customStyle.color = "skyblue";
  }
  return (
    <h2 className="heading" style={customStyle}>
      {greeting}
    </h2>
  );
}

export default Greeting;
export { currentDate };
