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
// import { useAnalytics } from 'use-analytics'
// import * as Recharts from 'recharts'
import Graph from 'src/components/Graph'

interface CityOption {
  value: string
  label: string
}

// const { track } = useAnalytics()

const optionCities2 = [
  'Alameda, CA',
  'Alhambra, CA',
  'Anaheim, CA',
  'Antioch, CA',
  'Apple Valley, CA',
  'Atlanta, GA',
  'Auburn, CA',
  'Austin, TX',
  'Bakersfield, CA',
  'Baldwin Park, CA',
  'Baltimore, MD',
  'Bellevue, WA',
  'Berkeley, CA',
  'Boston, MA',
  'Boulder, CO',
  'Buena Park, CA',
  'Burbank, CA',
  'Camarillo, CA',
  'Cambridge, MA',
  'Carlsbad, CA',
  'Carson, CA',
  'Charlotte, NC',
  'Chicago, IL',
  'Chico, CA',
  'Chino Hills, CA',
  'Chino, CA',
  'Chula Vista, CA',
  'Citrus Heights, CA',
  'Cleveland, OH',
  'Clovis, CA',
  'Columbia, MO',
  'Columbus, OH',
  'Compton, CA',
  'Concord, CA',
  'Corona, CA',
  'Costa Mesa, CA',
  'Cupertino, CA',
  'Dallas, TX',
  'Daly City, CA',
  'Davis, CA',
  'Denver, CO',
  'Detroit, MI',
  'Downey, CA',
  'Dublin, CA',
  'El Cajon, CA',
  'El Monte, CA',
  'Elk Grove, CA',
  'Escondido, CA',
  'Fairfield, CA',
  'Folsom, CA',
  'Fontana, CA',
  'Fremont, CA',
  'Fresno, CA',
  'Fullerton, CA',
  'Garden Grove, CA',
  'Glendale, CA',
  'Grand Rapids, MI',
  'Hawthorne, CA',
  'Hayward, CA',
  'Hemet, CA',
  'Hesperia, CA',
  'Houston, TX',
  'Huntington Beach, CA',
  'Indianapolis, IN',
  'Indio, CA',
  'Inglewood, CA',
  'Irvine, CA',
  'Jurupa Valley, CA',
  'Lake Forest, CA',
  'Lakewood, CA',
  'Lancaster, CA',
  'Larkspur, CA',
  'Lincoln, NH',
  'Livermore, CA',
  'Long Beach, CA',
  'Los Altos, CA',
  'Los Angeles, CA',
  'Louisville, KY',
  'Lynwood, CA',
  'Manchester, NH',
  'Manteca, CA',
  'Memphis, TN',
  'Menifee, CA',
  'Merced, CA',
  'Miami, FL',
  'Milpitas, CA',
  'Milwaukee, WI',
  'Mission Viejo, CA',
  'Modesto, CA',
  'Moreno Valley, CA',
  'Mountain View, CA',
  'Murrieta, CA',
  'Napa, CA',
  'Nashua, NH',
  'Nashville, TN',
  'New York, NY',
  'Newark, NJ',
  'Newport Beach, CA',
  'Norwalk, CA',
  'Oakland, CA',
  'Oceanside, CA',
  'Oklahoma City, OK',
  'Omaha, NE',
  'Ontario, CA',
  'Orange, CA',
  'Orlando, FL',
  'Oxnard, CA',
  'Palmdale, CA',
  'Pasadena, CA',
  'Perris, CA',
  'Philadelphia, PA',
  'Phoenix, AZ',
  'Pittsburgh, PA',
  'Placentia, CA',
  'Pleasanton, CA',
  'Pomona, CA',
  'Porterville, CA',
  'Portland, OR',
  'Raleigh, NC',
  'Rancho Cordova, CA',
  'Rancho Cucamonga, CA',
  'Redding, CA',
  'Redlands, CA',
  'Redondo Beach, CA',
  'Redwood City, CA',
  'Reno, NV',
  'Rialto, CA',
  'Richmond, CA',
  'Riverside, CA',
  'Roseville, CA',
  'Sacramento, CA',
  'Salinas, CA',
  'Salt Lake City, UT',
  'San Antonio, TX',
  'San Bernardino, CA',
  'San Diego, CA',
  'San Dimas, CA',
  'San Francisco, CA',
  'San Jose, CA',
  'San Leandro, CA',
  'San Marcos, CA',
  'San Mateo, CA',
  'San Ramon, CA',
  'Santa Ana, CA',
  'Santa Barbara, CA',
  'Santa Clara, CA',
  'Santa Clarita, CA',
  'Santa Cruz, CA',
  'Santa Maria, CA',
  'Santa Monica, CA',
  'Santa Rosa, CA',
  'Seattle, WA',
  'Simi Valley, CA',
  'South Gate, CA',
  'Springfield, MA',
  'Saint Paul, MN',
  'Stockton, CA',
  'Sunnyvale, CA',
  'Temecula, CA',
  'Thousand Oaks, CA',
  'Torrance, CA',
  'Tracy, CA',
  'Tucson, AZ',
  'Tulsa, OK',
  'Turlock, CA',
  'Tustin, CA',
  'Union City, CA',
  'Upland, CA',
  'Vacaville, CA',
  'Vallejo, CA',
  'Ventura, CA',
  'Victorville, CA',
  'Visalia, CA',
  'Vista, CA',
  'Washington, D.C.',
  'West Covina, CA',
  'Westminster, CA',
  'Whittier, CA',
  'Yuba City, CA',
].map((cityName) => ({
  value: cityName,
  label: cityName,
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
  const cityPath = selectedCity?.value // "Anaheim, CA"
    .toLowerCase() // "anaheim, ca"
    .split(',') // ["anaheim", " ca"]
    .map((s) => s.trim()) //["anaheim" ,"ca"]
    .join('-') // "anaheim-ca"

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
            Pie chart
          </Text.Heading>

          <Text.SectionSubheader color="white" mb={3}>
            Select your city below and see what police pie chart looks like
          </Text.SectionSubheader>
          <div></div>

          <Select
            css={css(typography.textStyles.body)}
            value={selectedCity}
            options={optionCities2}
            className="mb-4"
            placeholder="Select City"
            isSearchable
            onChange={handleCityChange}
          />

          {selectedCity && (
            <Box
              mt={4}
              css={css`
                color: white;
                text-align: center;
              `}
            >
              <Image
                width="60%"
                border="5px solid white"
                src={`./CityInfographics/${cityPath}.png`}
              />
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
