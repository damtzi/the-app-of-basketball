import React from "react";
import logo from "../icons/logo.png";
import { useRecoilState } from "recoil";
import { searchedPlayer } from "./PlayerAtom";
import {
  Nav,
  NavHeader,
  SearchBar,
  NavLeft,
  NavCenter,
  Logo,
} from "./styled/Header";

function Header() {
  const [player, setPlayer] = useRecoilState(searchedPlayer);

  // set state only if "Enter" key is pressed
  const handleUserInput = (e) => {
    if (e.key === "Enter") {
      setPlayer(e.target.value);
    }
  };

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
            onKeyPress={handleUserInput}
          ></SearchBar>
        </NavCenter>
      </NavHeader>
    </Nav>
  );
}

export default Header;
