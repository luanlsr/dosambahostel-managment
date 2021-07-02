import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Guests from '../pages/Guests'
import Restaurant from '../pages/Restaurant'
import Cashier from '../pages/Cashier'
import Financial from '../pages/Financial'
import NotFound from '../pages/NotFound'


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/guests" component={Guests} />
      <Route exact path="/restaurant" component={Restaurant} />
      <Route exact path="/cashier" component={Cashier} />
      <Route exact path="/financial" component={Financial} />
      <Route component={NotFound} />
    </Switch>
  )
}
