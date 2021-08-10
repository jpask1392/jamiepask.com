// Dependencies
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { margin, breakpoint } from 'styles/sc-mixins'
import Link from 'next/link'
import { useState } from 'react'

// Component
const SiteNotice = ({ className }) => {
  const [isActive, setIsActive] = useState(true)

  return (
    <div className={className}>
      <div className={`toggle ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
        <span/>
        <span/>
      </div>
      {
        isActive && (
          <div className="notice">
            <p><Link href="/case-study/portfolio"><a>How I built this site</a></Link></p>
          </div>
        )
      }
    </div>
  )
}

// Export
export default styled(SiteNotice)`
  height: 55px;
  width: 55px;
  position: fixed;
  bottom: 0;
  text-transform: uppercase;
  background: #212121;
  display: flex;
  align-items: center;
  border-radius: 100px;
  z-index: 1050;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  margin: 30px;
  justify-content: center;

  @media ${breakpoint.md} {
    ${margin(0.65, 0.65)}
  }

  .notice {
    position: absolute;
    left: 50%;
    background: #212121;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1;
    white-space: nowrap;
    letter-spacing: 0.03em;
    font-weight: 500;

    a {
      color: white;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.3s;

      &:hover {
        border-bottom: 1px solid white;
      }
    }
  }

  .toggle {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    width: 1rem;
    height: 1rem;
    z-index: 2;
    cursor: pointer;
    transform: rotate(-45deg);

    &.active {
      transform: rotate(0);
    }
    
    span {
      width: 100%;
      height: 2px;
      background: white;
      display: block;
      border-radius: 2px;
      transform-origin: center center;

      &:first-of-type {
        transform: translateY(1px) rotate(-45deg);
      }

      &:last-of-type {
        transform: translateY(-1px) rotate(45deg);
      }
    }
  }
`
