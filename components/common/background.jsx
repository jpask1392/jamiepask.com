// Dependencies
import styled from 'styled-components'

// Component
const Background = ({className}) => (
  <div className={className} id="">
    <div className="lhs"></div>
    <div className="rhs"></div>
  </div>
)

// Export
export default styled(Background)`
  mix-blend-mode: multiply;
  position: fixed;
  z-index: -1;
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
