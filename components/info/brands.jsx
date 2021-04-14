// Dependencies
import styled from 'styled-components'
import { container, breakpoint, columnWidth } from 'styles/sc-mixins'
import Cimage from 'components/common/cImage'

// Component
const Brands = ({className, data, bg}) => {
  return (
    <div className={className}>
      { data.brands.map((brand, i) => (
        <Cimage
          src={brand.image.src}
          alt="Brand Logo"
          width={brand.image.width}
          height={brand.image.height}
          sizes="100px"
        />
      ))  }
    </div>
  )
}

// Export
export default styled(Brands)`
  margin: 15px 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${columnWidth(0.75)};
  row-gap: 30px;

  @media ${breakpoint.md} {
    grid-template-columns: repeat(4, 1fr);
    ${container(10, 1)}
    margin-top: ${columnWidth(0.5)};
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
