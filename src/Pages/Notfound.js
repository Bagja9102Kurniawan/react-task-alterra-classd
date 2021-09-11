import React from "react";
import MotionHoc from "./MotionHoc";
import "./Boot.css";

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <center>
      <a href="/" class="myButton">
        RETURN TO HOME
      </a>
    </center>
  </div>
);

const NtFound = MotionHoc(NotFound);
export default NtFound;
