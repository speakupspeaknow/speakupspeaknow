import * as React from 'react'
import Image from 'src/components/Image'
import logoImage from 'src/images/logo.png'

interface Props extends React.ComponentProps<typeof Image> {}

const Logo = (props: Props) => <Image {...props} src={logoImage} />

Logo.defaultProps = {
  width: '60px',
  height: '60px',
}

export default Logo
