import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo-ALTA.png";
const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="">
          <img src={logo} width="100" height="50" alt="" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="" href="/">
            Home
          </Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
