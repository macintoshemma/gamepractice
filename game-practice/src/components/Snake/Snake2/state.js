import React from 'react'
import randNum from './helpers'

const NUMBER_OF_ROWS = 20
const NUMBER_OF_COLS = 20

class GameState extends React.Component {
  constructor(props) {
    super(props)
    this.grid = this.initGrid()
    this.snake = {
      head: this.initSnake()
    }
    this.grid[this.snake.head.x][this.snake.head.y] = 1
  }

  initGrid() {
    let rows = new Array(NUMBER_OF_ROWS).fill(new Array(NUMBER_OF_COLS).fill(0))
    return rows
  }

  initSnake() {
    return {
      x: randNum(0, NUMBER_OF_ROWS),
      y: randNum(0, NUMBER_OF_COLS)
    }
  }

  render () {
    return (
      this.grid
    )
  }
} 
 

export default GameState