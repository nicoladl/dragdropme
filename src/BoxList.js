import React from 'react'
import Box from './Box'
import BoxDrag from './BoxDrag'

function BoxList() {
  return (
    <ul className="box-container">
      <Box />
      <Box />
      <BoxDrag />
      <BoxDrag />
    </ul>
  )
}

export default BoxList