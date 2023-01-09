import React from 'react';
import playerData from '../data/playerData';
import matchData from '../data/matchData';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';
import Player from './Player';

const PlayerList = () => {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  const onePlayer = parsedPlayerData[0];

  return (
    <section className="PlayerList">
      <h1>Current Participating Players</h1>
      <Player
        gamerTag={onePlayer.gamerTag}
        firstName={onePlayer.firstName}
        lastName={onePlayer.lastName}
        wins={onePlayer.wins}
      />

    </section>
  )
}

export default PlayerList;