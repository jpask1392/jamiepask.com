// Dependencies
import styled from 'styled-components'
import { container, breakpoint } from 'styles/sc-mixins'
import tinycolor from 'tinycolor2'
import Link from 'next/link'

// Component
const Footer = ({className, data, next}) => {
  return (
    <footer className={className}>
      <nav>
        <h3>Next Project:</h3>
        <Link href={`/case-study/${next.slug}`}>
          <a><h2>{next.name}</h2></a>
        </Link>
      </nav>
    </footer>
  )
}

// Export
export default styled(Footer)`
  text-align: center;
  overflow: hidden;
  background: ${({data}) => data.bg};
  color: ${({data}) => data.bg && tinycolor(data.bg).isDark() ? 'white' : 'black'};
  position: relative;
  z-index: 1040;

  @media ${breakpoint.md} {
    text-align: right;
  }

  nav {
    margin: 60px 0;

    @media ${breakpoint.md} {
      ${container(10, 1)}
    }

    h3 {
      opacity: 0.5;
    }

    a {
      display: block;
      font-size: 35px;
      color: ${({data}) => data.bg && tinycolor(data.bg).isDark() ? 'white' : 'black'};
      text-decoration: none;

      @media ${breakpoint.md} {
        font-size: 50px;
      }
    }
  }
`
