import React, { Component } from 'react'
import { randomInt } from './helpers'

const NUMBER_OF_ROWS = 20
const NUMBER_OF_COLS = 20
const TYPES = {
  SNAKE: "SNAKE"
}

class GameState extends React.Component {
  constructor(props) {
    super(props)
    this.snake = new Snake()
  }

  render () {
    return (
      <canvas ref="canvas"></canvas>
    )
  }
} 
 
class Snake extends Component {
  constructor(props) {
    super(props)
    this.body = [[13, 10], [12, 10], [11, 10], [10, 10]]
    this.direction = [0,1]
    this.type = TYPES.SNAKE
  }

  move() {
    return Object.assign({}, this)
  }
}

module.exports = {
  GameState,
  Snake,
  NUMBER_OF_ROWS,
  NUMBER_OF_COLS,
  TYPES
}