import styled, { css } from 'styled-components'

const size = {
  sm: '425px',
  md: '768px',
  lg: '1024px',
  xl: '2560px',
}

export const breakpoint = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
};

export const textColor = css`
  color: white;
`;

export const container = (column, marginY) => `
  margin: ${(100/14) * marginY}vw ${(100 / 14) * ((14 - column) / 2)}vw;  
`;

export const margin = (marginY, marginX) => `
  margin: ${(100/14) * marginY}vw ${(100/14) * marginX}vw;
`

export const columnWidth = value => `
  ${(100/14) * value}vw
`