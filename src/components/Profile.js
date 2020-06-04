import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchedPlayer } from "./PlayerAtom";
import { PlayerCard, PlayerBio } from "./styled/Card";

function Profile() {
  const [player, setPlayer] = useRecoilState(searchedPlayer);
  const [playerBio, setPlayerBio] = useState();
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(false);
    const [firstName, lastName] = player.split(" ");
    try {
      const response = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${firstName}%20${lastName}`
      );
      const data = await response.json();
      setPlayerBio(data.data);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    if (player !== "") {
      fetchData();
    }
  }, [player]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <PlayerCard>
        <PlayerBio>{player}</PlayerBio>
      </PlayerCard>
      {console.log(playerBio)}
    </div>
  );
}

export default Profile;
