import styled from 'styled-components'
import { useState, useEffect } from 'react'
import classNames from "classnames";
import { motion } from 'framer-motion';

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

const Cursor = ({className}) => {
    if (typeof navigator !== "undefined" && isMobile()) return null;

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
        setClicked(true);
    };

    const onMouseUp = () => {
        setClicked(false);
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a").forEach((el) => {
          el.addEventListener("mouseover", () => setLinkHovered(true));
          el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    };

    const cursorClasses = classNames("cursor", {
        "cursor--clicked": clicked,
        "cursor--hidden": hidden,
        "cursor--link-hovered": linkHovered
    });

    return (
      <>
        <div
          className={`${className} ${cursorClasses}`}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
        <div 
          className={`${className} cursor-expansion`}
        />
      </>
    );
};

export default styled(Cursor)`
  &.cursor {
    width: 15px;
    height: 15px;
    border: 1px solid #fefefe;
    border-radius: 100%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    // background: #fefefe;
    transition: all 150ms ease;
    transition-property: background-color, opacity, transform, mix-blend-mode;
    z-index: 9999;
    mix-blend-mode: difference;
    backface-visibility: hidden;
    pointer-events: none;
    will-change: transform;
  }
  
  &.cursor-expansion {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    transition: all 1s ease;
    // background: black;
    opacity: 0.1;
    border-radius: 100%;
  }

  &.cursor--clicked {
    transform: translate(-50%, -50%) scale(0.8);
  }

  &.cursor--link-hovered {
    transform: translate(-50%, -50%) scale(1.25);
    // background-color: white;
    // opacity: 0.7;
  }

  &.cursor--hidden {
    // opacity: 0;
  }
`