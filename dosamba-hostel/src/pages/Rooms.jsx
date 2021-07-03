import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import NavRooms from '../components/NavRooms'

export default function Rooms() {
  const history = useHistory()
  const {location: { pathname } } = history

  const newName = pathname.replace('/hostel/', '')

  return (
    <div>
      <Header />
      <NavBar />
      <NavRooms />
      {newName}
    </div>
  )
}
