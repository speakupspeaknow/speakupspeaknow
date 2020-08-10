import { css } from '@emotion/core'
import * as React from 'react'
import Box from 'src/components/Box'
import Icon from 'src/components/Icon'
import { InternalLink, ExternalLink } from 'src/components/Link'
import Logo from 'src/components/Logo'
import { colors } from 'src/styles'
import * as Text from 'src/components/Text'

interface Props { }

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

    <InternalLink to="/">
      <Logo />
    </InternalLink>
    <InternalLink to="/">
      <Text.SectionSubheader color="white">Defund Police</Text.SectionSubheader>
    </InternalLink>
    <InternalLink to="/cb2">
      <Text.SectionSubheader color="white">Community Investment</Text.SectionSubheader>
    </InternalLink>
    <InternalLink to="/resources">
      <Text.SectionSubheader color="white">Resources</Text.SectionSubheader>
    </InternalLink>
    <Box
      display="flex"
      css={css`
        & > *:not(:last-child) {
          margin-right: 10px;
        }
      `}
    >
      <ExternalLink href="https://www.instagram.com/speakup_speaknow">
        <Icon icon="instagram" size={1} color={colors.primaryTeal} />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/spkup_spknow">
        <Icon icon="twitter" color={colors.primaryTeal} />
      </ExternalLink>
    </Box>
  </Box>
)

export default Navbar
