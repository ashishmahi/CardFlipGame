import React from 'react';
import {CardContent, CardWrapper} from './Card.style';

export type CardModal = {
  id: number;
  number: number;
};
type CardProps = {
  card: CardModal;
  isOpen: boolean;
  onCardPress: (id: number) => void;
};
const Card: React.FC<CardProps> = ({isOpen, card, onCardPress}) => {
  return (
    <CardWrapper
      onPress={onCardPress}
      testID={`card-${card.id}`}
      isOpen={isOpen}>
      <CardContent testID={`card-content-${card.id}`} isOpen={isOpen}>
        {isOpen ? card.number : '?'}
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
