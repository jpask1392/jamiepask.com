// Dependencies
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { margin, breakpoint } from 'styles/sc-mixins'
import { MainMenu, Hamburger } from 'components/common'
import SVG from 'react-inlinesvg'
import { motion, AnimatePresence } from "framer-motion"

// Component
const Nav = ({className}) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={className}>
      <Link href="/">
        <a className={`logo ${open ? 'logo--white' : 'logo--black'}`} aria-label="Logo">
          <SVG src="/svg/waving-hand.svg" />
        </a>
      </Link>

      <Hamburger setOpen={setOpen} open={open} />

      <AnimatePresence>
        { open && <MainMenu setOpen={setOpen} /> }
      </AnimatePresence>
      
    </nav>
  )
}

// Export
export default styled(Nav)`
  margin: 30px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1040;
  pointer-events: none;

  @media ${breakpoint.md} {
    ${margin(0.65, 0.65)}
  }

  .logo {
    position: relative;
    z-index: 10;
    pointer-events: all;
    
    &--black {
      fill: black;
    }

    &--white {
      fill: white;
    }
  }
`
