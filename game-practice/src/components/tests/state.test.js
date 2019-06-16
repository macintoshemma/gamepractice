import React from 'react';
import ReactDOM from 'react-dom';
import GameState from '../Snake/Snake2/state'

describe('Initial Game State', () => {
  test('inital grid has 20 rows and 20 cols', () => {
    const grid = new GameState().state.grid

    expect(grid.length).toBe(20)
    expect(grid[0].length).toBe(20)
  }),
  test('snake random position', () => {
    const snake = new GameState().state.snake
    
    expect(snake.x).toBeGreaterThanOrEqual(0)
    expect(snake.y).toBeGreaterThanOrEqual(0)
  })
});
