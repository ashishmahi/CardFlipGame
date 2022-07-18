import React from 'react';
import {Alert} from 'react-native';
import {CardModal} from './components/Card/Card';

export const useGame = () => {
  const gridNumbers = [
    {number: 1, id: 0},
    {number: 2, id: 1},
    {number: 3, id: 2},
    {number: 4, id: 3},
    {number: 5, id: 4},
    {number: 6, id: 5},
    {number: 1, id: 6},
    {number: 2, id: 7},
    {number: 3, id: 8},
    {number: 4, id: 9},
    {number: 5, id: 10},
    {number: 6, id: 11},
  ];
  const [currentOpenPair, setCurrentOpenPair] = React.useState<CardModal[]>([]);
  const [noOfSteps, setNoOfSteps] = React.useState<number>(0);
  const [matchedCards, setMatchedCards] = React.useState<CardModal[]>([]);

  const onCardClick = (card: CardModal) => {
    const possibleMatchingPair = currentOpenPair.concat([card]);
    setCurrentOpenPair(possibleMatchingPair);
    const isAnyCardOpenForMatching = currentOpenPair.length;
    if (isAnyCardOpenForMatching) {
      const matchFailed = card.number !== currentOpenPair[0].number;
      if (matchFailed) {
        setTimeout(() => {
          setCurrentOpenPair([]);
        }, 1000);
      } else {
        const updatedMatchedCard = matchedCards.concat(possibleMatchingPair);
        setMatchedCards(updatedMatchedCard);
        setCurrentOpenPair([]);
        const hasGameWon = updatedMatchedCard.length === 12;
        if (hasGameWon) {
          Alert.alert(
            'Congratulation',
            `You win this game in ${noOfSteps + 1} steps`,
          );
        }
      }
    }
    setNoOfSteps(noOfSteps + 1);
  };

  const isCardOpen = (cardId: number) => {
    const isCurrentCardOpen = Boolean(
      currentOpenPair.find(card => card.id === cardId),
    );

    const isCardResolved = Boolean(
      matchedCards.find(card => card.id === cardId),
    );
    return isCurrentCardOpen || isCardResolved;
  };

  return {
    gridNumbers,
    onCardClick,
    isCardOpen,
    noOfSteps,
  };
};

export default useGame;