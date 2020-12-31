import { css } from '@emotion/core'
import * as React from 'react'
import Select from 'react-select'
import Box from 'src/components/Box'
import Navbar2 from 'src/components/Navbar2'
import * as Text from 'src/components/Text'
import { InternalLink } from 'src/components/Link'
import { colors, typography } from 'src/styles'
import Image from 'src/components/Image'
import Wave from 'src/components/SVG/Wave'
import Button from 'src/components/Button'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import {
  baseButtonStyles,
  styleVariants,
} from 'src/styles/components/buttonlike'

import { ResponsiveContainer } from 'recharts'
// import { useAnalytics } from 'use-analytics'
// import * as Recharts from 'recharts'
import { cityBudgetObjects } from 'src/data/cityBudgetObjects'
import Graph from 'src/components/Graph'
import { optionCities2 } from 'src/pages/CityBudget2'

const bp = 'md'


interface CityOption {
  value: string
  label: string

  policeBudget: any
  generalFund: any
  Population: any
  gfMinusPb: any

}

// const { track } = useAnalytics()


const cityOptions = cityBudgetObjects.map((budgetData) => ({
  value: budgetData.cityState,
  label: budgetData.cityState,
  policeBudget: budgetData.policeBudget,
  generalFund: budgetData.generalFund,
  Population: budgetData.Population,
  gfMinusPb: budgetData.gfMinusPb,

}))

const PieCharts = () => {
  const [selectedCity, setSelectedCity] = React.useState<CityOption | null>(
    null,
  )

  const handleCityChange = React.useCallback(
    (selectedOption: any) => {
      setSelectedCity(selectedOption)
    },
    [setSelectedCity],
  )
  // Anaheim, CA => anaheim-ca.png

  // const poleeceBudget = selectedCity?.value // "Anaheim, CA"


  const cityName = selectedCity?.value.split(',').shift()

  const socialMediaMessage = (platform: string) =>
    `I was able to see how ${cityName} can divest from police and invest in our community thanks to thanks to ${
      platform === 'twitter' ? '@spkup_spknow' : 'Speak Up Speak Now'
    }! Check it out at${platform === 'facebook' ? ':' : ''}`

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
      <Navbar2 />
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
          <Text.Heading text-a="s" color="white" fontWeight={700} mb={3}>

            Pie charts

          </Text.Heading>

          <Text.SectionSubheader color="white" mb={3}>
            Select your city below and see what police pie chart looks like
          </Text.SectionSubheader>


          <Select
            css={css(typography.textStyles.body)}
            value={selectedCity}

            options={cityOptions}

            className="mb-4"
            placeholder="Select City"
            isSearchable
            onChange={handleCityChange}
          />

          <div> </div>

          {selectedCity && (
            <Box
              mt={4}
              css={css`
                color: white;
                text-align: center;
              `}
            >

              {' '}
              <Text.SectionHeader color="white">
                {selectedCity.label}{' '}
              </Text.SectionHeader>
              <Text.Body color="white">
                Police Budget:{' '}
                <strong>${selectedCity.policeBudget.toLocaleString()}</strong>
              </Text.Body>
              <Text.Body color="white">
                General Fund:{' '}
                <strong>${selectedCity.generalFund.toLocaleString()}</strong>
              </Text.Body>
              <Box display={{ _: 'none', md: 'flex' }}>
                <Graph
                  cx={385}
                  PoliceBudget={selectedCity.policeBudget}
                  GeneralFundRemainder={selectedCity.gfMinusPb}
                />
              </Box>
              <Box display={{ _: 'flex', md: 'none' }}>
                <Graph
                  cx={210}
                  PoliceBudget={selectedCity.policeBudget}
                  GeneralFundRemainder={selectedCity.gfMinusPb}
                />
              </Box>

              <Box
                display="flex"
                css={css`
                  & > *:not(:last-child) {
                    margin-right: 10px;
                  }
                `}
              >
                {/* <a href={`./CityInfographics/${cityPath}.png`} download>
                                <Button
                                // onClick={() => {
                                //     track('Download Infographic', {


                                //     })
                                // }}
                                >Download</Button>
                            </a> */}

                <FacebookShareButton
                  // onClick={() => {
                  //     track('Share Twitter', {

                  //         city: selectedCity
                  //     })
                  // }}
                  quote={socialMediaMessage('facebook')}
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
                  // onClick={() => {
                  //     track('Share Twitter', {

                  //         city: selectedCity,
                  //     })
                  // }}
                  style={{
                    outline: 'none',
                    ...baseButtonStyles,
                    ...styleVariants.shareTwitter,
                  }}
                  title={socialMediaMessage('twitter')}
                  url="https://www.speakupspeaknow.org"
                >
                  Share on Twitter
                </TwitterShareButton>
              </Box>
            </Box>
          )}
          <Box mt={5} pt={3} borderTop={`1px solid ${colors.textGray}`}>
            <Text.Body color="gray" mb={2}>
              Speak up, Speak now is an intitative that empowers the people to
              hold their city officials accountable. Want to contribute? Want to
              get involved? Please let us know{' '}
              <InternalLink to="/getinvolved">here</InternalLink>.
            </Text.Body>
          </Box>
        </Box>
      </Box>
      <Wave />
    </Box>
  )
}

export default PieCharts
