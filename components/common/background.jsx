// Dependencies
import styled from 'styled-components'

// Component
const Background = ({className}) => {
  return (
    <div className={className}>
      <img className="lhs" src="/global/background-blur.png" alt=""/>
      <img className="rhs" src="/global/background-blur.png" alt=""/>
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
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.3;
  }

  .lhs {
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
  }

  .rhs {
    right: 0;
    bottom: 0;
    transform: translate(50%, 50%);
  }
`
