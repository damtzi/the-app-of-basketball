import React from "react";
import logo from "../icons/logo.png";
import {
  Nav,
  NavHeader,
  SearchBar,
  NavLeft,
  NavCenter,
  Logo,
} from "./styled/Header";

function Header() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <Logo src={logo} alt="Logo"></Logo>
        </NavLeft>
        <NavCenter>
          <SearchBar
            type="text"
            placeholder="Enter player's name..."
          ></SearchBar>
        </NavCenter>
      </NavHeader>
    </Nav>
  );
}

export default Header;
