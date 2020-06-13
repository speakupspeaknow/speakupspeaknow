import * as React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import { Redirect } from 'react-router-dom'

const NewCityRequestPage = () => {
  return (
    <React.Fragment>
      <ReactTypeformEmbed
        popup
        autoOpen
        autoClose={1}
        hideHeaders
        hideFooter
        buttonText="Go!"
        url="https://monilpat.typeform.com/to/PnG4ON"
      />
      <Redirect to="/" />
    </React.Fragment>
  )
}

export default NewCityRequestPage
