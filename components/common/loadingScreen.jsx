// Dependencies
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react';

// Component
const LoadingScreen = ({className}) => {
  const [isLoading, setIsLoading] = useState(true)
  const loadingTimer = 1; // in seconds

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <AnimatePresence>
      {
        isLoading ? (
          <motion.div 
            className={className}
            exit={{ opacity: 0 }}
          >
            <div className="loading">
              {/* <div className="loading__count">
                01%
              </div> */}
              <motion.div 
                className="loading__bar"
                animate={{ y: -30, opacity: 0, width: 175 }}
                transition={{ duration: 0.3, ease: 'easeOut', delay: loadingTimer }}
              >
                <motion.div 
                  className="loading__fill"
                  animate={{ width: '100%' }}
                  transition={{ duration: loadingTimer, ease: 'easeOut' }}
                />
              </motion.div>
            </div>
          </motion.div>
        ) : null
      }
    </AnimatePresence> 
  )
}

// Export
export default styled(LoadingScreen)`
  background: #F8F8F8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1060;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading {
    text-align: center;

    &__bar {
      width: 200px;
      height: 3px;
      background-color: #D6D6D6;
      margin-top: 15px;
      border-radius: 6px;
      overflow: hidden;
    }

    &__fill {
      width: 0%;
      height: 100%;
      background: #002375;
      border-radius: 6px;
    }
  }
`