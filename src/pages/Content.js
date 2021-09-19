import React from "react";
import "./style.css";

import { Button } from "react-bootstrap";

const Content = () => {
  return (
    <div>
      <div className="imgrounded" />
      <h1>Hi, my name is</h1>
      <p className="dua">Anne Sullivan</p>
      <p className="tiga">I build things for the web</p>
      <Button style={{ background: "#F47522" }}>Get in touch</Button>
    </div>
  );
};

export default Content;
