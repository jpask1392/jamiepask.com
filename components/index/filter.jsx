// Dependencies
import styled from 'styled-components'
import { container, breakpoint } from 'styles/sc-mixins'
import { useState, useEffect } from 'react'

// Component
const Filter = ({className, updateResults, projects}) => {
  const [filters, setActiveFilter] = useState([
    {name: "Wordpress", active: true},
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
    updateResults('Wordpress')
  }, [])


  return (
    <ul className={className}>
      {filters.map(({name, active}) => (
        <li 
          className={active ? 'active' : ''} 
          onClick={() => handleClick(name)}
          key={name}>
            <a>{name} 
            <sup className="count">
              {projects.filter(project => project.category === name).length}
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

  @media ${breakpoint.md} {
    ${container(10, 0)}
  }

  li {
    margin-right: 15px;
    opacity: 0.45;
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 0.5rem;
    transition: opacity 0.3s;

    @media ${breakpoint.md} {
      font-size: 20px;
      margin-right: 30px;
    }

    @media ${breakpoint.lg} {
      font-size: 25px;
      margin-right: 30px;
    }

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .count {
    font-size: 11px;
    font-weight: 500;
    margin-left: 2px;

    @media ${breakpoint.md} {
      font-size: 14px;
    }

    @media ${breakpoint.lg} {
      font-size: 14px;
    }
  }
`
