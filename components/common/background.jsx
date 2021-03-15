// Dependencies
import styled from 'styled-components'
import Cimage from 'components/common/cImage'

// Component
const Background = ({className}) => {
  return (
    <div className={className}>
      <div className="lhs">
        <Cimage
          src="/global/background-blur_ptgv7e"
          alt="background blur"
          layout="fill"
          sizes="(min-width: 768px) 25vw"
        />
      </div>
      <div className="rhs">
        <Cimage
          src="/global/background-blur_ptgv7e"
          alt="background blur"
          layout="fill"
          sizes="(min-width: 768px) 25vw"
        />
      </div>
    </div>
  )
}

// Export
export default styled(Background)`
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

    > div {
      height: 100%;
    }
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
