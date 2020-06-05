import { css } from '@emotion/core'
import * as React from 'react'
import Select from 'react-select'
import Box from 'src/components/Box'
import * as Form from 'src/components/Form'
import { ExternalLink } from 'src/components/Link'
import Navbar from 'src/components/Navbar'
import * as Text from 'src/components/Text'
import { cityToEmails } from 'src/data/cityData'
import * as emailData from 'src/data/email'
import { colors, typography } from 'src/styles'
import { makeMailToLink } from 'src/utils/mailto'

interface CityOption {
  value: string
  label: string
}

const cityOptions = Object.keys(cityToEmails).map((cityName) => ({
  value: cityName,
  label: cityName,
}))

const getEmailsForCity = (city: string) => {
  return cityToEmails[city]
}

interface FormData {
  name: string
}

const LandingPage = () => {
  const [selectedCity, setSelectedCity] = React.useState<CityOption | null>(
    null,
  )
  const [personName, setPersonName] = React.useState<string>('')

  const handleCityChange = React.useCallback(
    (selectedOption: any) => {
      setSelectedCity(selectedOption)
    },
    [setSelectedCity],
  )

  const handleNameChange = React.useCallback(
    (event: React.SyntheticEvent<any>) => {
      setPersonName(event?.currentTarget.value)
    },
    [setPersonName],
  )

  return (
    <Box minHeight="100vh" container overflowX="hidden" bg="black" py={4}>
      <Navbar />
      <Box
        container={{ _: { maxWidth: '90%' }, md: { maxWidth: '70%' } }}
        display="flex"
        flexDirection="column"
      >
        <Text.Heading color="white" fontWeight={700} mb={3}>
          Let's hold our elected officials accountable.
        </Text.Heading>

        <Text.SectionSubheader color="white">I live in</Text.SectionSubheader>
        <Select
          css={css(typography.textStyles.body)}
          value={selectedCity}
          onChange={handleCityChange}
          options={cityOptions}
        />

        {selectedCity && (
          <Box
            mt={3}
            display="flex"
            flexDirection="column"
            alignItems="stretch"
          >
            <Text.SectionSubheader color="white">
              and my name is
            </Text.SectionSubheader>
            <Form.Input
              py={2}
              name="name"
              value={personName}
              onChange={handleNameChange}
            />
          </Box>
        )}

        {personName && selectedCity && (
          <Box
            mt={3}
            display="flex"
            flexDirection="column"
            alignItems="stretch"
          >
            <Text.SectionSubheader color="white">
              I've had enough. It's time to demand change.
            </Text.SectionSubheader>
            <Box mt={4}>
              <ExternalLink
                asButton
                noUnderline
                target="_blank"
                buttonStyle="primary"
                href={makeMailToLink({
                  to: getEmailsForCity(selectedCity.value),
                  subject: emailData.subject,
                  body: emailData.makeBody({
                    name: personName,
                    city: selectedCity.label,
                  }),
                })}
              >
                Send email to {selectedCity.label} officials
              </ExternalLink>
            </Box>
          </Box>
        )}

        <Box mt={5} pt={3} borderTop={`1px solid ${colors.textGray}`}>
          <Text.Body>
            Speak up, speak now is an intitative that empowers the people to
            hold their city officials accountable. Thanks to the help of a LOT
            of people, we have been able to collect the contact information of
            city officials in many California cities. The fact that Los Angeles
            has a Democratic Mayor with 14 of it's 15 council members being
            Democrats and are following up a city budget that gave 52% of
            allotment to the police and are considering a new one that cuts
            social services while increasing police budget allotment to 57%
            shows that voting is not enough. We MUST hold our democratically
            elected representatives accountable and have our best interests at
            heart.
          </Text.Body>
        </Box>
      </Box>
    </Box>
  )
}

export default LandingPage
