import React, { Component } from 'react'
import { randomInt } from './helpers'

const NUMBER_OF_ROWS = 20
const NUMBER_OF_COLS = 20

class GameState extends React.Component {
  constructor(props) {
    super(props)
    this.grid = this.initGrid()
    this.snake = new Snake()
    //this.fillGrid()
  }

  initGrid() {
    return new Array(NUMBER_OF_ROWS).fill(new Array(NUMBER_OF_COLS).fill(0))
  }

  fillGrid() {
    for(let i = 0; i <= this.snake.length; i++) {
      this.grid[this.snake.head.x][this.snake.head.y - i] = 1
    }
  }

  isSnake(x, y) {
    return this.grid[x][y] === 1
  }

  onHeadMoved(oldPos, newPos) {
    //this.grid[oldPos.x - this.snake.length][oldPos.y - this.snake.length] = 0
    this.grid[newPos.x][newPos.y] = 1
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
    if(this.props) {
      this.head = this.props.head
      this.length = this.props.length
    }
    if(this.props === undefined){
      this.head = this.randomPlace()
      this.length = 3
    }
    this.tail = this.initTail()
  }

  initTail() {
    let tail = []
    for (let i = 1; i <= this.length; i++) {
      tail.push({x: this.head.x - i, y: this.head.y})
    }
    return tail
  }

  randomPlace() {
    return {
      x: randomInt(0, NUMBER_OF_ROWS),
      y: randomInt(0, NUMBER_OF_COLS)
    }
  }

  setHead(x, y) {
    const oldHead = this.head
    this.head = {x, y}
  }

  isSnake({ x, y }) {
    return this.tail.concat([this.head]).some(el => {
      return el.x === x && el.y === y
    })
  }

  move() {
    this.setHead(this.head.x, this.head.y + 1)
  }
}

module.exports = {
  GameState,
  Snake
}