import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import NavRooms from '../components/NavRooms'
import {rooms} from   '../services/rooms'
import '../styles/Rooms.css'

export default function Rooms() {
  const history = useHistory()
  const {location: { pathname } } = history
  const roomName = pathname.replace('/hostel/', '')
  
  const roomsFilter = rooms.filter((room) => room.name === roomName)
  // roomsMap.filter(())
  console.log(roomsFilter);

  const { guests } = roomsFilter[0]
  console.log(guests);
  return (
    <div>
      <Header />
      <NavBar />
      <NavRooms />
      <div className="guests-card">
        {guests.map((guest) => (
          <div className="guest-card">
            <img src={guest.photo} alt={guest.name} />
            <h2>{`${guest.name} ${guest.lastName}`}</h2>
            <h5>{`Sou do quarto ${roomName}`}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}
