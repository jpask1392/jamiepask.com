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
            {name} <span className="count">
              {projects.filter(project => project.category === name).length}
            </span>
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
    opacity: 0.35;
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 0.5rem;

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
    border: 1px solid black;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    line-height: 1.7;

    @media ${breakpoint.md} {
      font-size: 22px;
      width: 35px;
      height: 35px;
      line-height: 1.5;
    }

    @media ${breakpoint.lg} {
      font-size: 20px;
      width: 30px;
      height: 30px;
      line-height: 1.5;
    }
  }
`
