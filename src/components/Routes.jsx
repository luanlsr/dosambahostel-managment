import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Hostel from '../pages/Hostel'
import Rooms from '../pages/Rooms'
import Restaurant from '../pages/Restaurant'
import Cashier from '../pages/Cashier'
import Financial from '../pages/Financial'
import NotFound from '../pages/NotFound'


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/hostel" component={Hostel} />
      <Route path="/hostel/:room" component={Rooms} />
      <Route exact path="/restaurante" component={Restaurant} />
      <Route exact path="/caixa" component={Cashier} />
      <Route exact path="/financeiro" component={Financial} />
      <Route component={NotFound} />
    </Switch>
  )
}
