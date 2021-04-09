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

// Component\
const LgHeader = ({className, data, bg}) => {
  return (
    <motion.h2 
      className={className} 
    
      variants={variants}
      initial={variants.hidden}
    >
      {data.content}
    </motion.h2>
  )
}

// Export
export default styled(LgHeader)`
  margin: 15px 30px;
  color: ${({bg}) => bg && tinycolor(bg).isDark() ? 'white' : '#002476'};
  white-space: pre-line;

  @media ${breakpoint.md} {
    ${container(10, 0)}
  }

  @media ${breakpoint.lg} {
    padding-right: ${columnWidth(2)};
  }

  + p {
    padding-top: 0;

    @media ${breakpoint.md} {
      padding-top: ${columnWidth(0.5)};
    }
  }
`
