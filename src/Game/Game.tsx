import React from 'react';
import {Pressable} from 'react-native';
import Card from './components/Card/Card';
import {
  GameGrid,
  RestartAndStepsContainer,
  RestartText,
  StepCount,
  Steps,
} from './Game.style';

const Game: React.FC = () => {
  return (
    <>
      <RestartAndStepsContainer>
        <Pressable>
          <RestartText>Restart</RestartText>
        </Pressable>
        <Steps>
          STEPS:<StepCount>0</StepCount>{' '}
        </Steps>
      </RestartAndStepsContainer>
      <GameGrid>
        {[...Array(12).keys()].map(i => {
          return <Card key={`id is ${i}`} id={i} isOpen />;
        })}
      </GameGrid>
    </>
  );
};

export default Game;
