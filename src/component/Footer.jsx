import React from "react";
import { currentDate } from "./Greeting";

function Footer() {
  const currentYear = currentDate.getFullYear();
  return (
    <p className="redClass" contentEditable="true">
      Copyright {currentYear}
    </p>
  );
}

export default Footer;
