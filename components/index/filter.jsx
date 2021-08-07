// Dependencies
import styled from 'styled-components'
import { container, breakpoint } from 'styles/sc-mixins'
import { useState, useEffect } from 'react'

// Component
const Filter = ({className, updateResults, projects}) => {
  const [filters, setActiveFilter] = useState([
    {name: "All", active: true},
    {name: "Wordpress", active: false},
    {name: "Shopify", active: false},
    {name: "React", active: false},
  ])

  const handleClick = (name) => {
    let filtersCopy = [...filters]
    filtersCopy.forEach(filter => filter['active'] = filter.name === name )
    setActiveFilter(filtersCopy)
    updateResults(name)
  }

  useEffect(() => {
    // set default
    updateResults('All')
  }, [])


  return (
    <ul className={className}>
      {filters.map(({name, active}) => (
        <li 
          className={active ? 'active' : ''} 
          key={name}>
            <a onClick={() => handleClick(name)}>
              {name} 
              <sup className="count">
                {
                  name !== "All"
                    ? projects.filter(project => project.category === name).length
                    : projects.length
                }
              </sup>
            </a>
        </li>  
      ))}
    </ul>
  )
}

// Export
export default styled(Filter)`
  margin: 15px 30px;
  padding: 0 10px;
  list-style-type: none;
  display: flex;
  position: relative;
  z-index: 1;
  line-height: 1;

  @media ${breakpoint.md} {
    ${container(10, 0)}
    margin-bottom: 40px !important;
  }

  li {
    margin-right: 15px;
    opacity: 0.35;
    font-size: 15px;
    margin-bottom: 0.5rem;
    font-weight: 700;
    transition: opacity 0.3s;

    @media ${breakpoint.md} {
      font-size: 20px;
      margin-right: 30px;
      margin-bottom: 0;
    }

    @media ${breakpoint.lg} {
      font-size: 21px;
      margin-right: 30px;
    }

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  .active {
    opacity: 1;
  }

  .count {
    font-size: 11px;
    font-weight: 400;
    margin-left: 5px;

    @media ${breakpoint.md} {
      font-size: 10px;
    }

    @media ${breakpoint.lg} {
      font-size: 10px;
    }
  }
`
