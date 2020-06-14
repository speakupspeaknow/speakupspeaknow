import * as React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import { Redirect } from 'react-router-dom'

interface Props {
  url: string
}
const EmbeddedTypeform = ({ url }: Props) => {
  return (
    <React.Fragment>
      <ReactTypeformEmbed
        popup
        autoOpen
        autoClose={1}
        hideHeaders
        hideFooter
        buttonText="Go!"
        url={url}
      />
      <Redirect to="/" />
    </React.Fragment>
  )
}

export default EmbeddedTypeform
