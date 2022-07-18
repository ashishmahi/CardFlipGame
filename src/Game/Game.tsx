import React from 'react';
import {Button, Text} from 'react-native';

type GameProps = {
  title: string;
};
const Game: React.FC<GameProps> = () => {
  return (
    <>
      <Button title="Restart" />
    </>
  );
};

export default Game;
