import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react-native';
import Game from './Game';
import {Alert} from 'react-native';

jest.useFakeTimers();

describe('Game Test', () => {
  const winGame = (screen: RenderResult) => {
    const cell0 = screen.getByTestId('card-0');
    const cell1 = screen.getByTestId('card-1');
    const cell2 = screen.getByTestId('card-2');
    const cell3 = screen.getByTestId('card-3');
    const cell4 = screen.getByTestId('card-4');
    const cell5 = screen.getByTestId('card-5');
    const cell6 = screen.getByTestId('card-6');
    const cell7 = screen.getByTestId('card-7');
    const cell8 = screen.getByTestId('card-8');
    const cell9 = screen.getByTestId('card-9');
    const cell10 = screen.getByTestId('card-10');
    const cell11 = screen.getByTestId('card-11');

    fireEvent.press(cell0);
    fireEvent.press(cell6);

    fireEvent.press(cell1);
    fireEvent.press(cell7);

    fireEvent.press(cell2);
    fireEvent.press(cell8);

    fireEvent.press(cell3);
    fireEvent.press(cell9);

    fireEvent.press(cell4);
    fireEvent.press(cell10);

    fireEvent.press(cell5);
    fireEvent.press(cell11);

    jest.runAllTimers();
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render  Game', () => {
    expect(render(<Game />)).toMatchSnapshot();
  });
  it('should open the card when clicked', () => {
    const container = render(<Game />);
    const cell = container.getByTestId('card-1');
    const cellContent = container.getByTestId('card-content-1');
    fireEvent.press(cell);
    expect(cell.props.style[0].backgroundColor).toBe('white');
    expect(cellContent.children).toContain('2');
  });

  it('should open only single card', () => {
    const container = render(<Game />);
    const cell = container.getByTestId('card-2');
    fireEvent.press(cell);
    expect(container.getAllByText('3')).toHaveLength(1);
  });

  it('should increase steps counter', () => {
    const container = render(<Game />);
    const cell = container.getByTestId('card-1');
    fireEvent.press(cell);
    expect(container.getByTestId('stepCounter').children).toContain('1');
  });

  it('should open, wait for a second and close both the card if pair is non matching', () => {
    const container = render(<Game />);
    const cell1 = container.getByTestId('card-1');
    const cell2 = container.getByTestId('card-2');
    fireEvent.press(cell1);
    fireEvent.press(cell2);
    expect(cell1.props.style[0].backgroundColor).toBe('white');
    expect(cell2.props.style[0].backgroundColor).toBe('white');

    jest.runAllTimers();
    expect(cell1.props.style[0].backgroundColor).toBe('deepskyblue');
    expect(cell2.props.style[0].backgroundColor).toBe('deepskyblue');
  });

  it('should keep open the matching pairs', () => {
    const container = render(<Game />);
    const cell1 = container.getByTestId('card-1');
    const cell2 = container.getByTestId('card-7');
    fireEvent.press(cell1);
    fireEvent.press(cell2);
    expect(cell1.props.style[0].backgroundColor).toBe('white');
    expect(cell2.props.style[0].backgroundColor).toBe('white');

    jest.runAllTimers();
    expect(cell1.props.style[0].backgroundColor).toBe('white');
    expect(cell2.props.style[0].backgroundColor).toBe('white');
  });

  it('should keep open the matching pairs even after clicking on third card', () => {
    const container = render(<Game />);
    const cell1 = container.getByTestId('card-1');
    const cell7 = container.getByTestId('card-7');
    const cell2 = container.getByTestId('card-2');
    fireEvent.press(cell1);
    fireEvent.press(cell7);
    expect(cell1.props.style[0].backgroundColor).toBe('white');
    expect(cell7.props.style[0].backgroundColor).toBe('white');

    jest.runAllTimers();
    fireEvent.press(cell2);
    jest.runAllTimers();
    expect(cell1.props.style[0].backgroundColor).toBe('white');
    expect(cell7.props.style[0].backgroundColor).toBe('white');
  });

  it('should alert on winning the game', () => {
    const spyAlert = jest.spyOn(Alert, 'alert');
    const container = render(<Game />);
    winGame(container);
    expect(spyAlert).toHaveBeenCalledWith(
      'Congratulation',
      'You win this game in 12 steps',
      [{onPress: expect.any(Function), text: 'Try Another Round'}],
    );
  });
  it('should restart game on restart click', () => {
    const container = render(<Game />);
    const cell1 = container.getByTestId('card-1');
    const cell7 = container.getByTestId('card-7');

    fireEvent.press(cell1);
    fireEvent.press(cell7);
    fireEvent.press(container.getByTestId('restart'));

    expect(cell1.props.style[0].backgroundColor).toBe('deepskyblue');
    expect(cell7.props.style[0].backgroundColor).toBe('deepskyblue');
    expect(container.getByTestId('stepCounter').children).toContain('0');
  });
  it('should restart game on restart click of winning message', () => {
    const spyAlert = jest.spyOn(Alert, 'alert');
    const container = render(<Game />);

    winGame(container);

    spyAlert.mock.calls[0][2][0].onPress();

    const cell1 = container.getByTestId('card-1');
    const cell7 = container.getByTestId('card-7');

    expect(cell1.props.style[0].backgroundColor).toBe('deepskyblue');
    expect(cell7.props.style[0].backgroundColor).toBe('deepskyblue');

    expect(container.getByTestId('stepCounter').children).toContain('0');
  });
});
