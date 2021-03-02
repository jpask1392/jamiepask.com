// Dependencies
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import { LgHeader, SmHeader, Body, LgImage, SmHeaderReport, ImageColumns } from 'components/blocks'
import { Brands, Timeline } from 'components/info/index'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'

// Component
const Section = ({className, data}) => {
  // map string to component
  const components = {
    "lgHeader": LgHeader,
    "body": Body,
    "lgImage": LgImage,
    "smHeader": SmHeader,
    "smHeaderReport": SmHeaderReport,
    "brands": Brands,
    "timeline": Timeline,
    "imageColumns": ImageColumns
  }

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce	: true,
  });

  return (
    <motion.section 
      className={className} 
      id={data.id} 
      ref={ref}
      animate={inView ? "visible" : "hidden"} 
      variants={ {visible:{transition:{staggerChildren: 0.2}}} }
    >
      { data.blocks.map((block) => {
        // Render block based on typename
        let key = block.type;
        let DynamicTagName = components[key] ?? null;
        if (DynamicTagName) return <DynamicTagName key={block.id} data={block} bg={data.background}/>
      })}
    </ motion.section>
  )
}

// Export
export default styled(Section)`
  background: ${({data}) => data.background};

  &:not(:first-of-type) {
    margin: 60px 0;
    padding: ${({data}) => data.background ? '60px' : '0'} 0;

    @media ${breakpoint.md} {
      ${container(14, 1)}
      padding: ${({data}) => data.background && columnWidth(1)} 0;
    }
  }

  &:last-of-type {
    margin-bottom: 30px;
    padding-bottom: ${columnWidth(1)};

    @media ${breakpoint.md} {
      margin-bottom: 0;
    }
  }
`
