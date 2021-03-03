// Dependencies
import Link from 'next/link'
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import Cimage from 'components/common/cImage'
import SVG from 'react-inlinesvg'
import tinycolor from 'tinycolor2'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  visible: {
    opacity: 1,
    skewY: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hidden: {
    opacity: 0,
    skewY: 5,
    y: "6rem",
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
}



// Component
const Project = ({className, data, updateIndex, index, indexInView}) => {
  const [isHover, setIsHover] = useState(false)
  const { ref, inView } = useInView({
    threshold: 1
  });


  useEffect(() => {
    if (inView) updateIndex(index)
  }, [inView]);

  return (
    <motion.article 
      className={`${className}`}
      ref={ref}
      animate={indexInView === index ? "visible" : "hidden"} 
      variants={ {visible:{transition:{staggerChildren: 0.1}}} }
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link href={`/case-study/${data.slug}`}>
        <a>
          <motion.div 
            className="background"
            variants={ {active: { scale: 0.99 }, inactive: { scale: 1 }} }
            animate={isHover ? "active" : "inactive"}
          />
          <div className="image">
            <Cimage
              src={data.hero.src}
              alt="Picture of the author"
              width={data.hero.width}
              height={data.hero.height}
              sizes="
                (min-width: 1000px) and (max-width: 1999px) 400px, 
                (min-width: 2000px) and (max-width: 2500px) 500px,
                100vw"
            />
          </div>
          <motion.h4 variants={variants} className="title">{data.name}</motion.h4>
          <motion.span variants={variants} className="arrow"><SVG src="/svg/arrow.svg" /></motion.span>
          <motion.span variants={variants} className="category">{data.category}</motion.span>
          <motion.time variants={variants} dateTime={data.date}>{data.date}</motion.time>
        </a>
      </Link>
    </motion.article>
  )
}

// Export
export default styled(Project)`
  margin: 30px 30px;
  display: block;
  height: ${((100 / 14) * 10) * 1.5}vw;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  @media ${breakpoint.md} {
    height: ${((100 / 14) * 10) * 0.9}vw;
  }

  @media ${breakpoint.lg} {
    ${container(10, 0.75)}
    height: ${((100 / 14) * 10) * 0.56}vw;
  }

  &:hover .background {
    // transform: scale(0.98);
  }

  &:first-of-type {
    margin: 30px 30px;

    @media ${breakpoint.lg} {
      ${container(10, 0.5)}
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  a {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .background {
    background: ${({data}) => data.color};
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s;
    border-radius: 10px;
  }

  .title,
  .arrow,
  time,
  .category {
    position: absolute;
    z-index: 10;
    color: ${({data}) => tinycolor(data.color).isDark() ? 'white' : 'black'};
    // transition: all 0.6s;
  }

  .arrow svg {
    fill: ${({data}) => tinycolor(data.color).isDark() ? 'white' : 'black'};
  }

  .category,
  time {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .title {
    top: 30px;
    left: 30px;
    font-size: 14px;

    @media ${breakpoint.lg} {
      top: ${columnWidth(0.5)};
      left: ${columnWidth(0.5)};
      font-size: 16px;
    }
  }

  .category {
    bottom: 30px;
    left: 30px;

    @media ${breakpoint.lg} {
      bottom: ${columnWidth(0.5)};
      left: ${columnWidth(0.5)};
      font-size: 16px;
    }
  }

  .arrow {
    top: 30px;
    right: 30px;

    @media ${breakpoint.lg} {
      top: ${columnWidth(0.5)};
      right: ${columnWidth(0.5)};
      font-size: 16px;
    }
  }

  time {
    bottom: 30px;
    right: 30px;

    @media ${breakpoint.lg} {
      bottom: ${columnWidth(0.5)};
      right: ${columnWidth(0.5)};
      font-size: 16px;
    }
  }

  .image {
    position: relative;
    width: 100%;
    height: 100%;
    margin: ${columnWidth(1)} ${columnWidth(3)};

    > div {
      top: 50%;
      transform: translateY(-50%);
    }
  }

`
