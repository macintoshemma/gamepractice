import React from 'react';
import ReactDOM from 'react-dom';
import GameState from '../Snake/Snake2/state'

describe('Initial Game State', () => {
  let gameState = {}

  beforeEach(() => {
    gameState = new GameState
  })
  it('inital grid has 20 rows and 20 cols', () => {
    const grid = gameState.grid

    expect(grid.length).toBe(20)
    expect(grid[0].length).toBe(20)
  }),
  it('inital grid is initialized with 0', () => {
    const grid = gameState.grid
    const gridZeroed = grid[0].every(cell => cell === 0|| cell === 1)
    expect(gridZeroed).toBeTruthy()
  }),
  it('snake random position', () => {
    const snake = gameState.snake
    
    expect(snake.head.x).toBeGreaterThanOrEqual(0)
    expect(snake.head.y).toBeGreaterThanOrEqual(0)
  })
  it('snake is placed on the grid', () => {
    const gamestate = gameState
    const snake = gamestate.snake
    const grid = gamestate.grid
    
    expect(grid[snake.head.x][snake.head.y]).toBe(1)
  })
});
