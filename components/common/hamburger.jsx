// Dependencies
import styled from 'styled-components'
import { motion } from 'framer-motion';

// Component
const Hamburger = ({className, setOpen, open}) => (
  <button className={className} onClick={() => setOpen(!open)} aria-label="Navigation Toggle">
    <motion.div 
      className="hamburger"
      animate={open ? "open" : "closed"}
    >
      <motion.span variants={ { open: {y: 7, rotate: 45} } }></motion.span>
      <motion.span variants={ { open: {y: 0, rotate: -45} } }></motion.span>
      <motion.span variants={ { open: {x: 50, opacity: 0} } }></motion.span>
    </ motion.div>
  </button>
)

// Export
export default styled(Hamburger)`
  position: relative;
  z-index: 10;
  border: 0;
  background: transparent;
  line-height: 0;
  font-size: 0;
  align-self: center;
  cursor: pointer;
  padding: 1rem;
  top: -1rem;
  right: -1rem;
  overflow: hidden;
  pointer-events: all;

  &:focus {
    outline: none;
  }

  .hamburger {
    width: 30px;
    height: 16px;
    position: relative;
  }

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: ${({open}) => open ? 'white': 'black'};
    position: absolute;
  }

  span:nth-child(1) {
    left: 0;
  }

  span:nth-child(2) {
    left: 0;
    top: 7px;
  }

  span:nth-child(3) {
    right: 0;
    top: 14px;
    width: 50%;
  }
`
