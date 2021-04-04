// Dependencies
import Link from 'next/link'
import styled from 'styled-components'
import { margin, breakpoint } from 'styles/sc-mixins'
import SVG from 'react-inlinesvg'

// Component
const Nav = ({className, data}) => {
  return (
    <>
    <nav className={className}>
      <Link href="/">
        <a className="arrow back-arrow"><SVG src="/svg/arrow.svg" /></a>
      </Link>

      <a className="arrow launch-arrow" href={data.url} target="_blank" rel="noreferrer">
        <SVG src="/svg/arrow.svg" />
      </a>
    </nav>
    </>
  )
}

// Export
export default styled(Nav)`
  ${margin(0.65, 0.65)}

  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1040;
  mix-blend-mode: difference;

  &.mix-blend {
    mix-blend-mode: color;
  }

  .arrow {
    position: relative;
    z-index: 10;
    width: 50px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.26);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0);
    transition: background 0.3s;

    @media ${breakpoint.lg} {
      width: 65px;
      height: 65px;
    }

    svg {
      fill: white;
      width: 100%;
      height: 100%;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .back-arrow svg {
    transform: rotate(180deg);
  }

  .launch-arrow svg {
    transform: rotate(-45deg);
  }
`
