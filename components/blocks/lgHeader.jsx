// Dependencies
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import tinycolor from 'tinycolor2'
import { motion } from 'framer-motion';
import { Tooltip } from 'components/common/'
import parse from 'html-react-parser'

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
      {
        (Array.isArray(data.content)) 
          ? data.content.map((block) => (
            typeof block === 'object' 
                ? <Tooltip data={block} />
                : parse(block)
            ))
          : parse(data.content)
      }
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
