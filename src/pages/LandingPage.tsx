import { css } from '@emotion/core'
import * as React from 'react'
import Select from 'react-select'
import Box from 'src/components/Box'
import * as Form from 'src/components/Form'
import { ExternalLink } from 'src/components/Link'
import Navbar from 'src/components/Navbar'
import * as Text from 'src/components/Text'
import { cityToEmails, getEmailsForCity } from 'src/data/cityData'
import * as emailData from 'src/data/email'
import { colors, typography } from 'src/styles'
import { makeMailToLink } from 'src/utils/mailto'
import Wave from 'src/components/SVG/Wave'
import {
  baseButtonStyles,
  styleVariants,
} from 'src/styles/components/buttonlike'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import { useAnalytics } from 'use-analytics'

interface CityOption {
  value: string
  label: string
}

const cityOptions = Object.keys(cityToEmails).map((cityName: string) => ({
  value: cityName,
  label: cityName,
}))

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

  const { track } = useAnalytics()

  return (
    <Box
      minHeight="100vh"
      width="100%"
      overflowX="hidden"
      bg="black"
      py={0}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
    >
      <Navbar />
      <Box
        container={{
          _: { maxWidth: '90%' },
          lg: { maxWidth: '50em' },
        }}
      >
        <Box
          width="100%"
          pt={{ _: 2, md: 2 }}
          pb={{ _: 3, md: 4 }}
          display="flex"
          flexDirection="column"
        >
          <Text.Heading color="white" fontWeight={700} mb={3}>
            Let's hold our elected officials accountable.
          </Text.Heading>

          <Text.Body color="white" mb={3}>
            It is unacceptable that for many cities, <strong>1/3</strong> to{' '}
            <strong>1/2</strong> of the budget is allotted to the police when
            communities are in need of social safety nets, now more than ever.
            We <strong>MUST</strong> hold our democratically elected
            representatives accountable and ensure that they have our best
            interests at heart. One way we can do that is by sending them emails
            demanding that they re-structure the budget: cutting funding for
            police departments in favor of important civic measures.
          </Text.Body>

          <Text.Body color="white" mb={3}>
            All you need to do is select your city and enter your name below for
            a pre-drafted email to send to your city’s officials.
          </Text.Body>

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
                my name is
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
                and I've had enough. It's time to demand change.
              </Text.SectionSubheader>
              <Box mt={4}>
                <ExternalLink
                  onClick={(): void => {
                    track('Send Email')
                  }}
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
              <Box mt={4}>
                <Box
                  display="flex"
                  css={css`
                    & > *:not(:last-child) {
                      margin-right: 10px;
                    }
                  `}
                >
                  <FacebookShareButton
                    onClick={(): void => {
                      track('Share Facebook')
                    }}
                    style={{
                      outline: 'none',
                      ...baseButtonStyles,
                      ...styleVariants.shareFacebook,
                    }}
                    url="https://www.speakupspeaknow.org"
                  >
                    Share on Facebook
                  </FacebookShareButton>
                  <TwitterShareButton
                   onClick={(): void => {
                      track('Share Twitter')
                    }}
                    style={{
                      outline: 'none',
                      ...baseButtonStyles,
                      ...styleVariants.shareTwitter,
                    }}
                    url="https://www.speakupspeaknow.org"
                  >
                    Share on Twitter
                  </TwitterShareButton>
                </Box>
              </Box>
            </Box>
          )}

          <Box mt={5} pt={3} borderTop={`1px solid ${colors.textGray}`}>
            <Text.Body color="textGray" mb={2}>
              Speak up, Speak now is an initiative that empowers the people to
              hold their city officials accountable. Thanks to the help of a LOT
              of people, we've collected the contact information of city
              officials from all over California, and even several major U.S
              cities. Want to contribute? Reach out at{' '}
              <ExternalLink
                href="mailto:tips@speakupspeaknow.org"
                onClick={(): void => {
                  track('Wants to Contribute')
                }}
              >
                tips@speakupspeaknow.org
              </ExternalLink>
              .
            </Text.Body>

            <Text.Body color="textMediumGray">
              If your city doesn't have the contact info of your city officials
              inputted yet, please send an email to{' '}
              <ExternalLink
                href="mailto:tips@speakupspeaknow.org"
                onClick={(): void => {
                  track('Wants New City Added')
                }}
              >
                tips@speakupspeaknow.org
              </ExternalLink>
              .
            </Text.Body>
          </Box>
        </Box>
      </Box>
      <Wave />
    </Box>
  )
}

export default LandingPage
