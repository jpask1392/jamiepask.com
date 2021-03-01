// Dependencies
import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { columnWidth } from 'styles/sc-mixins'
import { Background } from 'components/common'

const menuItems = [
  { name: "Work", link: "/" },
  { name: "Info", link: "/info" },
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
          </li>
        )) }
      </motion.ul>
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
  }

  li:not(:last-of-type) {
    margin-right: ${columnWidth(1)};
    display: flex;
    align-items: center;
  }

  a {
    display: block;
    color: white;
    font-size: 40px;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1 !important;
    }
  }

  .lhs {
    background: radial-gradient(100% 100% at top left, black, white) !important;
  }
`
