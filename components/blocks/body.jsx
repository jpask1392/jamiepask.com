// Dependencies
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import tinycolor from 'tinycolor2'
import { motion } from 'framer-motion';

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.6
    }
  },
  hidden: {
    opacity: 0,
    y: 50
  },
}

// Component
const Body = ({className, data, bg}) => {
  return (
    <motion.p 
      className={className}
      variants={variants}
      initial={variants.hidden}
    >
      {data.content}
    </motion.p>
  )
}

// Export
export default styled(Body)`
  margin: 0 30px;
  color: ${({bg}) => bg && tinycolor(bg).isDark() ? 'white' : 'black'};
  white-space: pre-line;

  @media ${breakpoint.md} {
    ${container(10, 0)}
  }

  @media ${breakpoint.lg} {
    padding-right: ${columnWidth(2)};
  }

  + div {
    padding-top: ${columnWidth(1)};
  }

  + p::before {
    content: "-";
    display: block;
    visibility: hidden;
  }
`
