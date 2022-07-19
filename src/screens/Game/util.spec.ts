import {generateGrid} from './utils';

describe('Utils test', () => {
  it('should return grid', () => {
    const grid = generateGrid();
    expect(grid).toHaveLength(12);
    expect(grid.filter(card => card.number === grid[0].number)).toHaveLength(2);
  });
});
