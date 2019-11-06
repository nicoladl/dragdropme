import React from 'react'
import './Box.css';

function Box() {
  const [draggable, setDraggable] = React.useState(false)
  const [position, setPosition] = React.useState({})
  const [draggableItem, setDraggableItem] = React.useState(null)

  // drag item in according to coordinates
  const dragItem = () => {
    // add the size of the box
    const updatedPosition = {
      x: position.x - draggableItem.offsetWidth,
      y: position.y - draggableItem.offsetHeight
    }
    draggableItem.classList.add('draggable')

    return { transform: `translateX(${updatedPosition.x}px) translateY(${updatedPosition.y}px)` }
  }

  // get coordines and use hooks to update state
  const getCoordinates = e => {
    const position = {
      x: e.clientX,
      y: e.clientY
    }
    setPosition(position)
  }

  const activateDrag = e => {
    setDraggable(true)
    setDraggableItem(e.currentTarget)
  }

  // clear the positon on mouse leave
  const clearPositon = () => {
    const position = {
      x: 0,
      y: 0
    }
    setPosition(position)
    setDraggable(false)
    draggableItem.classList.remove('draggable')
  }

  return (
    <div
      onMouseMove={getCoordinates}
      onMouseDown={activateDrag}
      onMouseUp={clearPositon}
      onMouseLeave={clearPositon}
      className="box"
      style={draggable ? dragItem() : null}>drag me</div>
  )
}

export default Box