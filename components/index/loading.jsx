// Dependencies
import styled from 'styled-components'
import { container, breakpoint } from 'styles/sc-mixins'
import { useState, useEffect } from 'react'

// Component
const LoadingCard = ({className}) => {
  return (
    <>
      <div className={className}></div>
      <div className={className}></div>
    </>
  )
}

// Export
export default styled(LoadingCard)`
  margin: 30px 30px;
  display: block;
  height: ${((100 / 14) * 10) * 1.5}vw;
  position: relative;
  cursor: pointer;
  background: #F4F4F4;
  border-radius: 10px;

  @media ${breakpoint.md} {
    height: ${((100 / 14) * 10) * 0.9}vw;
  }

  @media ${breakpoint.lg} {
    ${container(10, 0.75)}
    height: ${((100 / 14) * 10) * 0.56}vw;
  }

  &:first-of-type {
    @media ${breakpoint.lg} {
      ${container(10, 0.5)}
    }
  }
`
