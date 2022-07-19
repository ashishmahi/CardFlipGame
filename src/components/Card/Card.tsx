import React from 'react';
import {Animated} from 'react-native';
import {
  CardBack,
  CardContent,
  CardContentBack,
  CardContentFront,
  CardFront,
  CardWrapper,
} from './Card.style';

export type CardModal = {
  id: number;
  number: number;
};
type CardProps = {
  card: CardModal;
  isOpen: boolean;
  onCardPress: () => void;
};
const Card: React.FC<CardProps> = ({isOpen, card, onCardPress}) => {
  const flipAnimation = React.useRef(new Animated.Value(0)).current;

  let flipRotation = 0;
  flipAnimation.addListener(({value}) => (flipRotation = value));

  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };
  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };

  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <CardWrapper
      onPress={() => {
        onCardPress();
        flipRotation ? flipToBack() : flipToFront();
      }}>
      <CardFront style={flipToBackStyle} testID={`card-${card.id}`}>
        <CardContentFront testID={`card-content-${card.id}`}>
          {'?'}
        </CardContentFront>
      </CardFront>
      <CardBack style={flipToFrontStyle} testID={`card-${card.id}`}>
        <CardContentBack testID={`card-content-${card.id}`}>
          {card.number}
        </CardContentBack>
      </CardBack>
    </CardWrapper>
  );
};

export default Card;
