import * as React from 'react'
import { css } from '@emotion/core'
import Box from 'src/components/Box'
import { ExternalLink } from 'src/components/Link'
import Navbar2 from 'src/components/Navbar2'
import * as Text from 'src/components/Text'
import Grid from '@material-ui/core/Grid'
import { NSOrders } from 'src/data/NSOrders'
import Logo from 'src/components/Logo'
import { Paper } from '@material-ui/core'
import { backgroundImages } from 'polished'
import Image from 'src/components/Image'

const OrdersPage = () => {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      overflowX="hidden"
      bg="white"
      py={0}
      display="flex"
      flexDirection="column"
      alignItems="stretch"
    >
      <Box
        borderBottom={`2px solid black`}
        mt={4}
        css={css`
          color: black;

          // alignItems:stretch;
          text-align: center;
          //  display: grid;
          // grid-template: repeat(8, 1000px) / repeat(12, 1fr)
          //  grid-template-columns: repeat(12, 1fr)
          //  grid-template-rows: repeat(8, 1000px)
          //width: 1000px;
        `}
      >
        <Text.PageHeader color="black">Orders</Text.PageHeader>
      </Box>
      <Box
        css={css`
          margin-top: 20px;
        `}
      >
        <Grid container spacing={2}>
          <Grid direction="column" item xs={1}>
            <Text.Body color="black">
              {' '}
              <strong>Order Date</strong>
            </Text.Body>
            {NSOrders.map((item) => (
              <Text.Body color="black">{item['Order Date']}</Text.Body>
            ))}
          </Grid>

          <Grid direction="column" item xs={1}>
            <Text.Body color="black">
              {' '}
              <strong>Name</strong>
            </Text.Body>
            {NSOrders.map((item) => (
              <Text.Body color="black">{item.Name}</Text.Body>
            ))}
          </Grid>
          <Grid item xs={1}>
            <Text.Body color="black">
              {' '}
              <strong>Address 1</strong>
            </Text.Body>
            {NSOrders.map((item) => (
              <Text.Body color="black">{item['Address Line 1']}</Text.Body>
            ))}
          </Grid>
          <Grid item xs={1}>
            <Text.Body color="black">
              {' '}
              <strong>Address 2</strong>
            </Text.Body>
            {NSOrders.map((item) => (
              <Text.Body color="black">{item['Address Line 2']}</Text.Body>
            ))}
          </Grid>

          <Grid item xs={1}>
            <Text.Body color="black">
              {' '}
              <strong>City</strong>
            </Text.Body>
            {NSOrders.map((item) => (
              <Text.Body color="black">{item.City}</Text.Body>
            ))}
          </Grid>
          <Grid item xs={1}>
            <Text.Body color="black">
              {' '}
              <strong>State</strong>
            </Text.Body>
            {NSOrders.map((item) => (
              <Text.Body color="black">{item.State}</Text.Body>
            ))}
          </Grid>

          <Grid item xs={1}>
            <Text.Body color="black">
              {' '}
              <strong>Zip Code</strong>
            </Text.Body>
            {NSOrders.map((item) => (
              <Text.Body color="black">{item['Zip Code']}</Text.Body>
            ))}
          </Grid>

          <Grid item xs={1}>
            <Text.Body color="black">
              {' '}
              <strong>Phone #</strong>
            </Text.Body>
            {NSOrders.map((item) => (
              <Text.Body color="black">{item['Phone Number']}</Text.Body>
            ))}
          </Grid>
          <Grid item xs={1} zeroMinWidth>
            <Text.Body color="black">
              {' '}
              <strong>Email</strong>
            </Text.Body>
            {NSOrders.map((item) => (
              <Text.Body color="black">{item.Email}</Text.Body>
            ))}
          </Grid>

          <Grid
            css={css`
              bottom-margin: 10px;
            `}
            item
            xs={1}
          >
            <Text.Body color="black">
              {' '}
              <strong>Shipping Label PDF</strong>
            </Text.Body>
          </Grid>

          <Grid item xs={1}>
            <Text.Body color="black">
              {' '}
              <strong>Design Array PDF</strong>
            </Text.Body>
            <Image width="50%" src={`./public/pdfIcon.png`} />
            <div>
              <Image width="50%" src={`./public/pdfIcon.png`} />{' '}
            </div>
            <div>
              <Image width="50%" src={`./public/pdfIcon.png`} />{' '}
            </div>
            <div>
              <Image width="50%" src={`./public/pdfIcon.png`} />{' '}
            </div>
            <div>
              <Image width="50%" src={`./public/pdfIcon.png`} />{' '}
            </div>
            <div>
              <Image width="50%" src={`./public/pdfIcon.png`} />{' '}
            </div>
            <div>
              <Image width="50%" src={`./public/pdfIcon.png`} />{' '}
            </div>
            <div>
              <Image width="50%" src={`./public/pdfIcon.png`} />{' '}
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default OrdersPage
