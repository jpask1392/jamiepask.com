// Dependencies
import styled from 'styled-components'
import { useEffect, useRef } from "react";

// Component
const Background = ({className}) => { 
  const ref = useRef()

  useEffect(() => {
    const canvas = ref.current
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // draw shape
    var ctx = canvas.getContext("2d")
    ctx.beginPath()
    ctx.arc(100, 75, 50, 0, 2 * Math.PI)
    ctx.stroke()

  }, [])

  return (
    <div className={className}>
      <canvas ref={ref} width="300" height="150"></canvas>
    </div>
  )
}

// Export
export default styled(Background)`
  mix-blend-mode: multiply;
  position: fixed;
  z-index: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .lhs,
  .rhs {
    position: absolute;
    width: 50%;
    height: 50%;
    z-index: -1;
    opacity: 0.3;
  }

  .lhs {
    left: 0;
    top: 0;
    background: radial-gradient(100% 100% at top left, #012E95, white);
  }

  .rhs {
    right: 0;
    bottom: 0;
    background: radial-gradient(100% 100% at bottom right, #012E95, white);
  }
`
