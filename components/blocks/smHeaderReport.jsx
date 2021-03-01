// Dependencies
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import tinycolor from 'tinycolor2'

// Component
const SmHeaderReport = ({className, data, bg}) => {
  return (
    <h3 className={className}>
      <span>{data.number}</span>
      <span>{data.title}</span>
    </h3>
  )
}

// Export
export default styled(SmHeaderReport)`
  margin: 15px 30px;
  margin-bottom: 30px;
  color: ${({bg}) => bg && tinycolor(bg).isDark() ? 'white' : 'black'};
  padding-right: ${columnWidth(1)};

  @media ${breakpoint.md} {
    ${container(12, 0)}
    padding-bottom: ${columnWidth(0.5)};
  }

  span:nth-child(1) {
    display: inline-block;
    width: ${columnWidth(1)};
  }
`
