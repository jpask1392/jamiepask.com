// Dependencies
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import Cimage from 'components/common/cImage'

// Component
const ImageColumms = ({className, data, bg}) => {
  return (
    <div className={className}>
      {
        data.content.map((column, i) => (
          <Cimage
            key={i}
            src={column.image.src}
            alt={column.image.alt}
            width={column.image.width}
            height={column.image.height}
            layout="responsive"
          />    
        ))
      }
    </div>
  )
}

// Export
export default styled(ImageColumms)`
  margin: 15px 30px;

  @media ${breakpoint.md} {
    ${container(10, 0)}
  }

  display: grid;
  grid-template-columns: repeat(${({data}) => data.columnCount}, 1fr);
  column-gap: ${({data}) => columnWidth(data.columnGap)};
  row-gap: 30px;

  > div {
    overflow: visible !important;
  }

  + div {
    margin-top: ${columnWidth(1)};
  }

  img {
    // filter: drop-shadow(0 30px 200px rgb(62 62 70 / 15%));
  }
`
