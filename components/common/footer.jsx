// Dependencies
import styled from 'styled-components'
import { container } from 'styles/sc-mixins'
import SVG from 'react-inlinesvg'

// Component
const Footer = ({className}) => {
  const socials = [
    {link: "https://www.linkedin.com/in/jamie-pask/", iconName: "linkedin"},
    {link: "https://www.github.com/jpask1392", iconName: "github"},
    {link: "mailto:contact@jamiepask.com", iconName: "email"}
  ]

  return (
    <footer className={className}>
      { socials.map(({link, iconName}) => (
        <a href={link} target="_blank" key={iconName}>
          <SVG src={`/svg/${iconName}.svg`} />
        </a>
      ))}
    </footer>
  )
}

// Export
export default styled(Footer)`
  ${container(10, 1)}

  text-align: center;
  margin-top: 0 !important;

  a {
    margin: 0 15px;
  }
`
