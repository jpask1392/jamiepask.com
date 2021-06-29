// Dependencies
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import { LgHeader, SmHeader, Body, LgImage, SmHeaderReport, ImageColumns, Gist } from 'components/blocks'
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
    "imageColumns": ImageColumns,
    "gist": Gist,
  }

  const { ref, inView } = useInView({
    rootMargin: `-100px`,
    triggerOnce	: true,
  });

  return (
    <motion.section 
      className={className} 
      id={data.id} 
      ref={ref}
      animate={inView ? "visible" : "hidden"} 
      variants={ {visible:{transition:{staggerChildren: 0.1}}} }
    >
      { data.blocks.map((block) => {
        // Render block based on typename
        let key = block.type;
        let uniqueId = data.slug + data.id + block.id;
        let DynamicTagName = components[key] ?? null;
        if (DynamicTagName) return <DynamicTagName key={uniqueId} data={block} bg={data.background}/>
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
