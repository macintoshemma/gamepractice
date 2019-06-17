import React from 'react';
import ReactDOM from 'react-dom';
import { GameState, Snake } from '../Snake/Snake2/state'

describe('Initial Game State', () => {
  let gameState = {}

  beforeEach(() => {
    gameState = new GameState()
  })

  describe('Grid', () => {
    it('initial grid has 20 rows and 20 cols', () => {
      const grid = gameState.grid
  
      expect(grid.length).toBe(20)
      expect(grid[0].length).toBe(20)
    }),
    it('initial grid is initialized with 0', () => {
      const grid = gameState.grid
      
      const gridZeroed = grid.every(row => row.every(cell => cell !== undefined))
      expect(gridZeroed).toBeTruthy()
    })
  })
 
  describe('Snake', () => {
    it('random position is assigned', () => {
      const snake = gameState.snake
      
      expect(snake.head.x).toBeGreaterThanOrEqual(0)
      expect(snake.head.y).toBeGreaterThanOrEqual(0)
    })
    it('is placed on the grid', () => {
      const { snake } = gameState

      expect(gameState.isSnake(snake.head.x, snake.head.y)).toBeTruthy
    })
    it('has 3 cells long tail', () => {
      const snake = new Snake({length: 4, head: {x: 5, y: 5}})
      console.log(snake.tail)

      expect(snake.tail.length).toBe(4)
      expect(snake.tail[0].x).toBe(4)
      expect(snake.tail[1].x).toBe(3)
      expect(snake.tail[2].x).toBe(2)
      expect(snake.tail[0].y).toBe(5)
    })
  }),
  describe.only('isState', () => {
    it('is truthy when asked about tail', () => {
      const snake = new Snake({length: 3, head: {x: 3, y: 3}})
      expect(snake.isSnake({x: 0, y: 3})).toBeTruthy()
    })
  }),
  describe('Movements', () => {
    it('can move one cell', () => {
      const { snake } = gameState
      snake.setHead(5, 5)

      console.log("before: ", snake.head)
      snake.move()
      console.log("after: ", snake.head)
      expect(snake.head.x).toBe(5)
      expect(snake.head.y).toBe(6)
  
    })
  })
});
