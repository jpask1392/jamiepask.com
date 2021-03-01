// Dependencies
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import tinycolor from 'tinycolor2'

// Component
const smHeader = ({className, data, bg}) => {
  return (
    <h3 className={className}>
      {data.content}
    </h3>
  )
}

// Export
export default styled(smHeader)`
  margin: 15px 30px;
  margin-bottom: 30px;
  color: ${({bg}) => bg && tinycolor(bg).isDark() ? 'white' : 'black'};

  @media ${breakpoint.md} {
    ${container(10, 0)}
    padding-bottom: ${columnWidth(0.5)};
  }
`
