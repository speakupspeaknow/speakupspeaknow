import { css } from '@emotion/core'
import * as React from 'react'
import Select from 'react-select'
import Box from 'src/components/Box'
import Navbar from 'src/components/Navbar'
import * as Text from 'src/components/Text'
import { InternalLink } from 'src/components/Link'
import { colors, typography } from 'src/styles'
import Image from 'src/components/Image'
import Wave from 'src/components/SVG/Wave'
import Button from 'src/components/Button'




interface CityOption {
    value: string
    label: string
}




const optionCities2 = [
    "Alameda, CA",
    "Alhambra, CA",
    "Anaheim, CA",
    "Antioch, CA",
    "Apple Valley, CA",
    "Atlanta, GA",
    "Auburn, CA",
    "Austin, TX",
    "Bakersfield, CA",
    "Baldwin Park, CA",
    "Baltimore, MD",
    "Bellevue, WA",
    "Berkeley, CA",
    "Boston, MA",
    "Boulder, CO",
    "Buena Park, CA",
    "Burbank, CA",
    "Camarillo, CA",
    "Cambridge, MA",
    "Carlsbad, CA",
    "Carson, CA",
    "Charlotte, NC",
    "Chicago, IL",
    "Chico, CA",
    "Chino Hills, CA",
    "Chino, CA",
    "Chula Vista, CA",
    "Citrus Heights, CA",
    "Cleveland, OH",
    "Clovis, CA",
    "Columbia, MO",
    "Columbus, OH",
    "Compton, CA",
    "Concord, CA",
    "Corona, CA",
    "Costa Mesa, CA",
    "Cupertino, CA",
    "Dallas, TX",
    "Daly City, CA",
    "Davis, CA",
    "Denver, CO",
    "Detroit, MI",
    "Downey, CA",
    "Dublin, CA",
    "El Cajon, CA",
    "El Monte, CA",
    "Elk Grove, CA",
    "Escondido, CA",
    "Fairfield, CA",
    "Folsom, CA",
    "Fontana, CA",
    "Fremont, CA",
    "Fresno, CA",
    "Fullerton, CA",
    "Garden Grove, CA",
    "Glendale, CA",
    "Grand Rapids, MI",
    "Hawthorne, CA",
    "Hayward, CA",
    "Hemet, CA",
    "Hesperia, CA",
    "Houston, TX",
    "Huntington Beach, CA",
    "Indianapolis, IN",
    "Indio, CA",
    "Inglewood, CA",
    "Irvine, CA",
    "Jurupa Valley, CA",
    "Lake Forest, CA",
    "Lakewood, CA",
    "Lancaster, CA",
    "Larkspur, CA",
    "Lincoln, NH",
    "Livermore, CA",
    "Long Beach, CA",
    "Los Altos, CA",
    "Los Angeles, CA",
    "Louisville, KY",
    "Lynwood, CA",
    "Manchester, NH",
    "Manteca, CA",
    "Memphis, TN",
    "Menifee, CA",
    "Merced, CA",
    "Miami, FL",
    "Milpitas, CA",
    "Milwaukee, WI",
    "Mission Viejo, CA",
    "Modesto, CA",
    "Moreno Valley, CA",
    "Mountain View, CA",
    "Murrieta, CA",
    "Napa, CA",
    "Nashua, NH",
    "Nashville, TN",
    "New York, NY",
    "Newark, NJ",
    "Newport Beach, CA",
    "Norwalk, CA",
    "Oakland, CA",
    "Oceanside, CA",
    "Oklahoma City, OK",
    "Omaha, NE",
    "Ontario, CA",
    "Orange, CA",
    "Orlando, FL",
    "Oxnard, CA",
    "Palmdale, CA",
    "Pasadena, CA",
    "Perris, CA",
    "Philadelphia, PA",
    "Phoenix, AZ",
    "Pittsburgh, PA",
    "Placentia, CA",
    "Pleasanton, CA",
    "Pomona, CA",
    "Porterville, CA",
    "Portland, OR",
    "Raleigh, NC",
    "Rancho Cordova, CA",
    "Rancho Cucamonga, CA",
    "Redding, CA",
    "Redlands, CA",
    "Redondo Beach, CA",
    "Redwood City, CA",
    "Reno, NV",
    "Rialto, CA",
    "Richmond, CA",
    "Riverside, CA",
    "Roseville, CA",
    "Sacramento, CA",
    "Salinas, CA",
    "Salt Lake City, UT",
    "San Antonio, TX",
    "San Bernardino, CA",
    "San Diego, CA",
    "San Dimas, CA",
    "San Francisco, CA",
    "San Jose, CA",
    "San Leandro, CA",
    "San Marcos, CA",
    "San Mateo, CA",
    "San Ramon, CA",
    "Santa Ana, CA",
    "Santa Barbara, CA",
    "Santa Clara, CA",
    "Santa Clarita, CA",
    "Santa Cruz, CA",
    "Santa Maria, CA",
    "Santa Monica, CA",
    "Santa Rosa, CA",
    "Seattle, WA",
    "Simi Valley, CA",
    "South Gate, CA",
    "Springfield, MA",
    "Saint Paul, MN",
    "Stockton, CA",
    "Sunnyvale, CA",
    "Temecula, CA",
    "Thousand Oaks, CA",
    "Torrance, CA",
    "Tracy, CA",
    "Tucson, AZ",
    "Tulsa, OK",
    "Turlock, CA",
    "Tustin, CA",
    "Union City, CA",
    "Upland, CA",
    "Vacaville, CA",
    "Vallejo, CA",
    "Ventura, CA",
    "Victorville, CA",
    "Visalia, CA",
    "Vista, CA",
    "Washington, D.C.",
    "West Covina, CA",
    "Westminster, CA",
    "Whittier, CA",
    "Yuba City, CA",

].map((cityName) => ({
    value: cityName,
    label: cityName,
}))



const CityBudget2 = () => {
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
        .toLowerCase()  // "anaheim, ca"
        .split(',')  // ["anaheim", " ca"]
        .map(s => s.trim())  //["anaheim" ,"ca"]
        .join('-') // "anaheim-ca"

    return (
        <Box
            minHeight="100vh"
            width="100%"
            overflowX="hidden"
            bg="black"
            py={4}
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
                    <Text.Heading text-a="s" color="white" fontWeight={700} mb={3}>
                        Re-imagine your city budget.
          </Text.Heading>

                    <Text.SectionSubheader color="white" mb={3}>
                        Select your city below and see what it would look like if Police were defunded by just <strong>1/2</strong> and the appropriated funds were alloted like so:
                    </Text.SectionSubheader>
                    <ul css={css`color: white; text-align: center`}>
                        <Text.Body color="white" mb={3}><strong>50% - Basic Needs </strong> </Text.Body>
                        <img width="10%" alt="Basic Needs Icon: little heart over a house" src={"./bni.png"} /> <Text.Body color="white" mb={3}>Housing, Food, Healthcare and Job Training</Text.Body>
                        <Text.Body color="white" mb={3}><strong>20% - Public Infrastructure </strong></Text.Body>
                        <div><img width="10%" alt="Public Infrastructure Icon: big building " src={"./pii.png"} /> <Text.Body color="white" mb={3}>Transportation, Libraries, and Parks</Text.Body> </div>
                        <Text.Body color="white" mb={3}><strong>30% - New Community Safety Measures </strong></Text.Body>
                        <div><img width="10%" alt="New Community Safety Measures Icon: two people facing each other" src={"./rcsi.png"} /> <Text.Body color="white" mb={3}>Community and Rehabilitation Oriented Programs </Text.Body> </div>
                    </ul>

                    <Select css={css(typography.textStyles.body)} value={selectedCity} options={optionCities2} className="mb-4" placeholder="Select City" isSearchable onChange={handleCityChange} />

                    {selectedCity && <Box mt={4} css={css`color: white; text-align: center`}>
                        <Image width="60%" border="5px solid white" src={`./CityInfographics/${cityPath}.png`} />
                        <Box>
                            <InternalLink to={`./CityInfographics/${cityPath}.png`} download>
                                <Button>Download</Button>
                            </InternalLink>
                        </Box>
                    </Box>}
                    <Box mt={5} pt={3} borderTop={`1px solid ${colors.textGray}`}>
                        <Text.Body color="gray" mb={2}>
                            Speak up, Speak now is an intitative that empowers the people to
                            hold their city officials accountable.
              Want to contribute? Want to get involved? Please let us know{' '}
                            <InternalLink to="/getinvolved">
                                here
              </InternalLink>
              .
            </Text.Body>
                    </Box>

                </Box>
            </Box>
            <Wave />
        </Box >
    )
}

export default CityBudget2