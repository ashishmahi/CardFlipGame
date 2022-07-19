import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const CardWrapper = styled.Pressable`
  margin: 10px;
  width: 27%;
  height: 140px;
`;

export const CardContent = styled.Text`
  font-size: 30px;
`;

export const CardFront = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  background-color: deepskyblue;
  position: absolute;
  border: 4px solid white;
  height: 100%;
  width: 100%;
`;
export const CardBack = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 4px solid white;
  height: 100%;
  width: 100%;
`;

export const CardContentFront = styled(CardContent)`
  color: white;
  backface-visibility: hidden;
`;

export const CardContentBack = styled(CardContent)`
  color: black;
`;
