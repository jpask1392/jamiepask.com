// Dependencies
import styled from 'styled-components'
import { container, breakpoint, columnWidth } from 'styles/sc-mixins'
import { motion } from 'framer-motion'

// Component
const Hero = ({className, header, subheader}) => (
  <header className={className}>
    <motion.h1
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
    >
      {header}
    </motion.h1>
    <h2 className="subtext">{subheader}</h2>
  </header>
)

// Export
export default styled(Hero)`
  margin: 100px 30px;
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  @media ${breakpoint.md} {
    ${container(10, 2.5)}
  }

  @media ${breakpoint.lg} {
    ${container(10, 1.5)}
  }

  h1 {
    font-size: 80px;
    line-height: 1;
    font-family: jeanne-moderno-geometrique, sans-serif;
    font-weight: 600;
    font-style: normal;
    text-transform: lowercase;
    color: #212121;

    @media ${breakpoint.md} {
      font-size: 120px;
    }

    @media ${breakpoint.lg} {
      font-size: 160px;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
  }

  .subtext {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 0.75rem;

    @media ${breakpoint.md} {
      font-size: 15px;
      margin-bottom: 1.25rem;
    }

    @media ${breakpoint.lg} {
      margin-bottom: 1.5rem;
    }
  }
`
