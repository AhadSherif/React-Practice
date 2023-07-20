import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      About
      <p>
        <NavLink to ="/">Go to home page</NavLink>
      </p>
    </div>
  );
}
export default About;
