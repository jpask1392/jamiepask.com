// Dependencies
import styled from 'styled-components'
import { container, columnWidth, breakpoint } from 'styles/sc-mixins'
import ReactGist from "react-gist";

// Component
const Gist = ({className, data, bg}) => {
  const {
    gistID
  } = data
  return (
    <div className={className}>
      <ReactGist id={gistID} />
    </div>
  )
}

// Export
export default styled(Gist)`
  @media ${breakpoint.md} {
    ${container(10, 0)}
  }

  @media ${breakpoint.lg} {
    padding-right: ${columnWidth(2)};
  }
  
  iframe {
    margin: -8px;
  }
`
