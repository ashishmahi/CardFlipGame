import React from 'react';
import {render} from '@testing-library/react-native';
import Card from './Card';
describe('Card Test', () => {
  it('should render closed card', () => {
    expect(render(<Card id={1} isOpen={false} />)).toMatchSnapshot();
  });

  it('should render open card', () => {
    expect(render(<Card id={1} isOpen />)).toMatchSnapshot();
  });
});
