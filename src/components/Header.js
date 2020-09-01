import React from "react";
import logo from "../icons/logo.png";
import { useRecoilState } from "recoil";
import { searchedPlayer } from "./PlayerAtom";
import {
  Nav,
  NavHeader,
  SearchBar,
  NavLeft,
  NavRight,
  NavCenter,
  Logo,
} from "./styled/Header";
import { Button } from "./styled/Button";

const Header = () => {
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
        <NavRight>
          <Button
            href="https://github.com/damtzi/the-app-of-basketball"
            target="_blank"
            rel="noopener"
          >
            GitHub 📁
          </Button>
        </NavRight>
      </NavHeader>
    </Nav>
  );
};

export default Header;
