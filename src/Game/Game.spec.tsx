import React from 'react';
import {render} from '@testing-library/react-native';
import Game from './Game';
describe('Game Test', () => {
  it('should render  Game', () => {
    expect(render(<Game />)).toMatchSnapshot();
  });
});
