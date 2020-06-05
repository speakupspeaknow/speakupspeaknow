import { css } from '@emotion/core'
import * as React from 'react'
import Box from 'src/components/Box'
import Logo from 'src/components/Logo'

interface Props {}

// const buttonStyles = css`
//   padding:
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   svg {
//     height: 1em;
//     margin-right: 5px;
//   }
// `

const Navbar = (props: Props) => (
  <Box
    p={35}
    bg="transparent"
    width="100%"
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Logo />
    <Box
      display="flex"
      css={css`
        & > *:not(:last-child) {
          margin-right: 10px;
        }
      `}
    >
      Menu
    </Box>
  </Box>
)

export default Navbar
