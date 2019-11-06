import React from 'react'
import './Box.css';
import { Draggable } from 'gsap/all'

class BoxDrag extends React.Component {

  componentDidMount() {
    Draggable.create('.box-drag',
      {
        type: 'x,y',
        edgeResistance: 0.65,
        bounds: '.box-container',
        throwProps: true,
        snap: {
          x: () => {
            return 100;
          }
        }
      });
  }

  render() {
    return (
      <div className="box-drag">gsap</div>
    )
  }
}

export default BoxDrag