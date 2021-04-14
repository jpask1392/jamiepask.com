// Dependencies
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import imageColumns from 'components/blocks/imageColumns'

// Component
const Tooltip = ({className, data}) => {
  const [isHovered, setHovered] = useState(false)

  const handleMouseOver = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  return (
    <span className={className}>
      <a
        onMouseOver={handleMouseOver} 
        onMouseLeave={handleMouseLeave}
        dangerouslySetInnerHTML={{__html: data.text}}
        href={data.href || "#"}
      />

      <AnimatePresence>
        {
          isHovered && (
            <motion.span
              className="tooltip"
              initial={{ opacity: 0, scale: 0.8, x: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%" }}
              exit={{ opacity: 0, scale: 0.8, x: "-50%" }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              
              {data.translation && <img src="/global/flag@2x.png" width="34" height="22" alt="Flag" />}
              {data.tooltip}
              
            </motion.span>
          )
        }
      </AnimatePresence>
    </span>
  )
}

// Export
export default styled(Tooltip)`
  position: relative;
  display: inline-block;

  a {
    position: relative;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    white-space: break-spaces;

    &::after {
      content: "";
      position: absolute;
      bottom: -6px;
      width: 100%;
      height: 1px;
      background: #002476;
      left: 0;
    }
  }

  .tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    background: white;
    padding: 19px 30px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    color: #B1AEAE;
    margin-bottom: 16px;
    line-height: 1;
    display: flex;
    align-items: center;

    img {
      margin-right: 5px;
    }

    &::before {
      position: absolute;
      content: "";
      border: 15px solid transparent;
      border-top-color: white;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      filter: drop-shadow(0 4px 2px rgba(0,0,0,0.2));
    }
  }
`
