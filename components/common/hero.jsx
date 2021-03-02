// Dependencies
import styled from 'styled-components'
import { container, breakpoint, columnWidth } from 'styles/sc-mixins'

// Component
const Hero = ({className, header, subheader}) => (
  <header className={className}>
    <h1>{header}</h1>
    <h3 className="subtext">{subheader}</h3>
  </header>
)

// Export
export default styled(Hero)`
  margin: 100px 30px;
  margin-top: 150px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  @media ${breakpoint.md} {
    ${container(10, 2.5)}
  }

  @media ${breakpoint.lg} {
    ${container(10, 1.5)}
  }

  h1 {
    font-size: 80px;
    line-height: 1;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;

    @media ${breakpoint.md} {
      font-size: 120px;
    }

    @media ${breakpoint.lg} {
      font-size: 180px;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
    margin-top: 1.5rem;
  }
`
