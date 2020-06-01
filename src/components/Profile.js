import React from "react";
import { useRecoilState } from "recoil";
import { searchedPlayer } from "./PlayerAtom";

function Profile() {
  const [player, setPlayer] = useRecoilState(searchedPlayer);

  return (
    <div>
      <h1>{player}</h1>
    </div>
  );
}

export default Profile;
