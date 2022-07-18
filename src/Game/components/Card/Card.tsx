import React from 'react';
import {CardContent, CardWrapper} from './Card.style';

type CardProps = {
  id: number;
  isOpen: boolean;
};
const Card: React.FC<CardProps> = ({isOpen, id}) => {
  return (
    <CardWrapper
      style={{
        backgroundColor: isOpen ? 'white' : 'deepskyblue',
      }}>
      <CardContent
        style={{
          color: isOpen ? 'black' : 'white',
        }}>
        {isOpen ? id : '?'}
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
