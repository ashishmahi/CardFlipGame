import styled from 'styled-components/native';

export const CardWrapper = styled.Pressable`
  margin: 10px;
  border-width: 4px;
  border-style: solid;
  border-color: white;
  width: 27%;
  height: 140px;
  justify-content: center;
  align-items: center;
  background-color: ${(props: {isOpen: boolean}) =>
    props.isOpen ? 'white' : 'deepskyblue'};
`;
export const CardContent = styled.Text`
  font-size: 30px;
  color: ${(props: {isOpen: boolean}) => (props.isOpen ? 'black' : 'white')};
`;
