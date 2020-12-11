import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from 'src/components/ProtectedRoute'
import { AuthLevel } from 'src/config'
import LandingPage from 'src/pages/LandingPage'
import { useAnalytics } from 'use-analytics'
import EmbeddedTypeform from 'src/pages/EmbeddedTypeform'
import SJEmail2 from 'src/pages/SJEmail2'
import CityBudget2 from 'src/pages/CityBudget2'
import Resources from 'src/pages/Resources'
import PieCharts from 'src/pages/PieCharts'
import OrdersPage from 'src/pages/OrdersPage'
import CityReps from 'src/pages/CityReps'

interface PageType {
  name: string
  path: string
  exact?: boolean // default is false
  component: (...args: any) => JSX.Element | null
  requiredAuthLevel?: AuthLevel
}

export const pages: Array<PageType> = [
  {
    name: 'landing',
    exact: true,
    path: '/',
    component: LandingPage,
  },
  {
    name: 'CityBudget2',
    exact: true,
    path: '/cb2',
    component: CityBudget2,
  },
  {
    name: 'resources',
    exact: true,
    path: '/resources',
    component: Resources,
  },
  {
    name: 'PieCharts',
    exact: true,
    path: '/pc',
    component: PieCharts,
  },
  {
    name: 'SJEmail2',
    exact: true,
    path: '/j4gjj',
    component: SJEmail2,
  },
  {
    name: 'OrdersPage',
    exact: true,
    path: '/orders',
    component: OrdersPage,
  },
  {
    name: 'CityReps',
    exact: true,
    path: '/cityreps',
    component: CityReps,
  },
  {
    name: 'newCityRequest',
    exact: true,
    path: '/newcityrequest',
    component: () => (
      <EmbeddedTypeform url="https://monilpat.typeform.com/to/PnG4ON" />
    ),
  },
  {
    name: 'getInvolved',
    exact: true,
    path: '/getinvolved',
    component: () => (
      <EmbeddedTypeform url="https://monilpat.typeform.com/to/Y0h31y" />
    ),
  },
]

export const PageRouter = () => {
  const { page } = useAnalytics()
  return (
    <Router>
      <Switch>
        {pages.map(({ name, requiredAuthLevel, ...rest }) => {
          page({ name })
          return requiredAuthLevel == null ? (
            <Route key={name} {...rest} />
          ) : (
            <ProtectedRoute
              key={name}
              requiredAuthLevel={requiredAuthLevel}
              {...rest}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export default pages
