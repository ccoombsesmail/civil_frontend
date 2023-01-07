import { css } from 'styled-components'

export const dynamicBorderRadius = (value, breakpoint) => css`
  border-radius: max(0px, min(${value}px, 100% - ${breakpoint}px + 1px) * 9999) /
    ${value}px;
`
