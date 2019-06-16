import React from 'react'
import './Canvas.css'

function rect(props) {
  const {ctx, x, y, width, height} = props;
  ctx.fillStyle = 'salmon'
  ctx.fillRect(x, y, width, height);
}

class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
      this.updateCanvas();
  }
  updateCanvas() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const scale = 10
    const rows = canvas.height / scale
    const columns = canvas.width / scale

    ctx.clearRect(10,20, 300, 300);
    rect({ctx, x: 50, y: 50, width: 10, height: 10});
  }

  Snakes() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const scale = 10
    this.x = 0;
    this.y = 0;
  
    this.draw = function() {
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(this.x, this.y, scale, scale)
    }
  }

  render() {
    let placeholder = 'Hello from Base component'

    return <React.Fragment>
    <div className='base-wrapper'>
     <h1 className='base'>{placeholder}</h1>
     <p className='placeholder-text'>This is a placeholder for the Snake board</p>
     <canvas ref="canvas" className="canvas" width="700" height="500"></canvas>
   </div>
 </React.Fragment>
  }

   
}

export default Canvas