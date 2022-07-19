import React from 'react';
import {Pressable} from 'react-native';
import Card from '../../components/Card/Card';
import {
  GameGrid,
  RestartAndStepsContainer,
  RestartText,
  StepCount,
  Steps,
} from './Game.style';
import useGame from './useGame';

const Game: React.FC = () => {
  const {gridNumbers, onCardClick, isCardOpen, noOfSteps, restartGame} =
    useGame();
  return (
    <>
      <RestartAndStepsContainer>
        <Pressable testID="restart" onPress={restartGame}>
          <RestartText>Restart</RestartText>
        </Pressable>
        <Steps>
          STEPS:<StepCount testID="stepCounter">{noOfSteps}</StepCount>{' '}
        </Steps>
      </RestartAndStepsContainer>
      <GameGrid>
        {gridNumbers.map(card => {
          return (
            <Card
              onCardPress={() => onCardClick(card)}
              key={`id-${card.id}`}
              card={card}
              isOpen={isCardOpen(card.id)}
            />
          );
        })}
      </GameGrid>
    </>
  );
};

export default Game;