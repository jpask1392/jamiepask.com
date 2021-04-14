// Dependencies
import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { columnWidth, breakpoint } from 'styles/sc-mixins'
import { Background } from 'components/common'
import SVG from 'react-inlinesvg'

const menuItems = [
  { name: "Work", link: "/" },
  { name: "Info", link: "/info" },
  { name: "Resume", link: "/resume-2021.pdf" },
]

const socials = [
  {link: "https://www.linkedin.com/in/jamie-pask/", iconName: "linkedin"},
  {link: "https://www.github.com/jpask1392", iconName: "github"},
  {link: "mailto:contact@jamiepask.com", iconName: "email"}
]

// Component
const Nav = ({className, setOpen}) => {
  return (
    <motion.section 
      className={className} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Background />
      <motion.ul 
        variants={ {visible:{transition:{staggerChildren: 0.2}}} }
        animate="visible"
      >
        { menuItems.map((menuItem, i) => (
          <li key={i}>
            { menuItem.name !== "Resume" 
              ? (
                <Link 
                  href={menuItem.link}
                >
                  <motion.a 
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0 }}
                    variants={{ visible: {
                      opacity: [0, 0.6],
                      y: ["6rem", "0rem"],
                      skewY: [5, 0],
                      transition: {
                        ease: "easeOut",
                        duration: 0.6,
                      }
                    }, }}
                  >
                    {menuItem.name}
                  </motion.a>
                </Link>
              ) : (
                <motion.a
                  target="_blank"
                  href={menuItem.link}
                  initial={{ opacity: 0 }}
                  variants={{ visible: {
                    opacity: [0, 0.6],
                    y: ["6rem", "0rem"],
                    skewY: [5, 0],
                    transition: {
                      ease: "easeOut",
                      duration: 0.6,
                    }
                  }, }}
                >
                  {menuItem.name}
                  <sup><SVG src="/svg/expand.svg" /></sup>
                </motion.a>
              )
            }
          </li>
        )) }
      </motion.ul>

      <motion.div 
        className="socials"
        animate={{ opacity: [0, 1], transition: {delay: 0.6} }}
      >
        { socials.map(({link, iconName}) => (
          <a href={link} target="_blank" key={iconName} rel="noreferrer" aria-label={link}>
            <SVG src={`/svg/${iconName}.svg`} />
          </a>
        ))}
      </motion.div>

    </motion.section>
  )
}

// Export
export default styled(Nav)`
  position: fixed;
  background: #062979;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all;

  ul {
    padding: 0;
    list-style-type: none;
    display: flex;

    a {
      display: block;
      color: white;
      font-size: 30px;
      text-decoration: none;
      cursor: pointer;
      transition: opacity 0.3s;

      @media ${breakpoint.lg} {
        font-size: 40px;
      }

      sup {
        margin-left: 5px;

        svg {
          width: 13px;
        }
      }
  
      &:hover {
        opacity: 1 !important;
      }
    }
  }

  li:not(:last-of-type) {
    margin-right: ${columnWidth(0.75)};
    display: flex;
    align-items: center;
  }

  .socials {
    position: absolute;
    bottom: ${columnWidth(0.65)};
    text-align: center;

    a {
      margin: 0 15px;
      opacity: 0.6;
      transition: opacity 0.3s;

      &:hover {
        opacity: 1;
      }

      svg {
        fill: white;
      }
    }
  }
`
