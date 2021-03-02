// Dependencies
import styled from 'styled-components'
import { container, breakpoint, columnWidth } from 'styles/sc-mixins'
import tinycolor from 'tinycolor2'

// Component
const Brands = ({className, data, bg}) => {
  return (
    <div className={className}>
      { data.brands.map((brand, i) => <img key={i} src={brand.image.src} />)  }
    </div>
  )
}

// Export
export default styled(Brands)`
  margin: 15px 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${columnWidth(1)};
  row-gap: 30px;

  @media ${breakpoint.md} {
    grid-template-columns: repeat(4, 1fr);
    ${container(10, 1)}
  }

  @media ${breakpoint.lg} {
    grid-template-columns: repeat(5, 1fr);
  }

  + div {
    padding-top: 60px;

    @media ${breakpoint.md} {
      padding-top: 0;
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`
