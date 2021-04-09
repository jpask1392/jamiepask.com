// Dependencies
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import { Body, LgHeader, SmHeaderReport } from 'components/blocks'
import tinycolor from 'tinycolor2'
import Cimage from 'components/common/cImage'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react'

// Component
const Hero = ({className, data}) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce	: true,
    initialInView : false,
  });

  return (
    <header className={className}>
      {/* <motion.div className="background" layoutId="test"></motion.div> */}

      <div className="title">
        <h1>{data.name}</h1>
        <span className="subtext">{data.subheader}</span>
      </div>

      <motion.section 
        id="overview"
        ref={ref}
        animate={inView ? "visible" : "hidden"} 
        variants={ {visible:{transition:{staggerChildren: 0.2}}} }
      >
        <SmHeaderReport data={{"number": "1.0", "title": "Overview"}} bg={data.bg} />
        <LgHeader data={data.overview.header} bg={data.bg} />
        <Body data={data.overview.body} bg={data.bg} />
        <div className="image-wrapper">
          <Cimage
            src={data.overview.image.src}
            alt="Picture of the author"
            width={data.overview.image.width}
            height={data.overview.image.height}
            layout="responsive"
          />
        </div>
      </motion.section>
    </header>
  )
}


// Export
export default styled(Hero)`
  background: ${({data}) => `linear-gradient(to top, ${tinycolor(data.bg).darken(10)}, ${data.bg})`};
  overflow: hidden;
  padding-bottom: 60px;
  margin-bottom: 0;

  @media ${breakpoint.md} {
    margin-bottom: ${columnWidth(1)};
    padding-bottom: ${columnWidth(1)};
  }

  .background {
    height: 1000px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: -1;
  }

  + section {
    margin: 60px 0;
    padding: ${({data}) => data.background ? '60px' : '0'} 0;

    @media ${breakpoint.md} {
      ${container(14, 1)}
      padding: ${({data}) => data.background && columnWidth(1)} 0;
    }
  }

  [class^=lgHeader] {
    color: ${({data}) => data.bg && tinycolor(data.bg).isDark() ? 'white' : 'black'};;
  }

  .title  {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    margin: 50px 30px;
    margin-top: 100px;

    @media ${breakpoint.md} {
      ${container(10, 2.5)}
    }

    @media ${breakpoint.lg} {
      ${container(10, 1.5)}
    }

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: ${({data}) => data.bg && tinycolor(data.bg).isDark() ? 'white' : 'black'};
      margin-top: 1.5rem;
    }
  }

  h1 {
    font-size: 50px;
    line-height: 1;
    text-transform: capitalize;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${({data}) => data.bg && tinycolor(data.bg).isDark() ? 'white' : 'black'};

    @media ${breakpoint.md} {
      font-size: 80px;
    }

    @media ${breakpoint.lg} {
      font-size: 120px;
    }
  }

  .image-wrapper {
    margin: 0 30px;

    @media ${breakpoint.md} {
      ${container(8, 0)}
    }
  }

`
