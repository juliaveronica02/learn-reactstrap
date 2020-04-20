import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default ({ name }) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">Reactstrap App</NavbarBrand>
  </Navbar>
);
