import React from 'react'
import randNum from './helpers'

class GameState extends React.Component {
  state = {
    grid: this.initGrid(),
    snake: this.initSnake()

  }

  initGrid() {
    let rows = Array(20).fill(Array(20))
    return rows
  }

  initSnake() {
    return {
      x: randNum(0, 20),
      y: randNum(0, 20)
    }
  }

  render () {
    return (
      this.state.grid
    )
  }
} 
 

export default GameState