import styled from 'styled-components'
import { useState, useEffect } from 'react'
import classNames from "classnames";
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { breakpoint } from 'styles/sc-mixins'
import { useSelector, useDispatch } from 'react-redux'
import { selectCursor, update } from 'redux/reducers/cursor'

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

const Cursor = ({className}) => {
    if (typeof navigator !== "undefined" && isMobile()) return null;

    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const springConfig = { damping: 100, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // get current state of cursor from redux
    const cursor = useSelector(selectCursor);

    // const [clicked, setClicked] = useState(false);
    const [viewButton, setViewButton] = useState(cursor === 'hover');
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
      addEventListeners()
    }, [])


    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseenter", onMouseEnter)
        document.addEventListener("mouseleave", onMouseLeave)
        // document.addEventListener("mousedown", onMouseDown);
        // document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove)
        document.removeEventListener("mouseenter", onMouseEnter)
        document.removeEventListener("mouseleave", onMouseLeave)
        // document.removeEventListener("mousedown", onMouseDown);
        // document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
    };

    // const onMouseDown = () => {
    //     setClicked(true);
    // };

    // const onMouseUp = () => {
    //     setClicked(false);
    // };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    return (
      <>
        <motion.div
          className={`cursor ${className}`}
          style={{ 
            left: cursorXSpring,
            top: cursorYSpring,
          }}
        ><div className={``} /></motion.div>
      
        <AnimatePresence>
          {cursor === 'hover' && (
            <motion.div
              className={`${className} view`}
              style={{
                left: cursorXSpring,
                top: cursorYSpring,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span>View Project</span>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
};

export default styled(Cursor)`
  display: none;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;

  @media ${breakpoint.sm} {
    display: block;
  }

  &.view {
    color: white;
    backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    line-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 12px;
    width: 200px;
    height: 200px;
    letter-spacing: 0.1em;
  }

  &.cursor {
    width: 15px;
    height: 15px;
    border: 1px solid #fefefe;
    border-radius: 100%;
    backface-visibility: hidden;
    will-change: transform;
    mix-blend-mode: difference;
  }
  
  &.cursor-expansion {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    opacity: 0.1;
    border-radius: 100%;
  }
`