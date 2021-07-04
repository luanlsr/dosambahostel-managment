import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import {FaBed} from 'react-icons/fa'
import {rooms} from '../services/rooms'
import '../styles/NavRooms.css'

export default function Guests() {
  const [roomToggle, setRoomToggle] = useState(false)
  const history = useHistory()
  const {location: {pathname}} = history

  useEffect(() => {
      rooms.some((room) => room.name === pathname) ? setRoomToggle(true) : setRoomToggle(false)
}, [pathname])

  return (
    <div>
      <ul className="rooms">
        {rooms.map((room) => (
          <Link to={`/hostel/${room.name}`}  >
            <button className={roomToggle ? "actives" : ""} >
              <FaBed className="bed"/>
              <li key={room.id}>{room.name}</li>
              <div className="hr"></div>
            </button>
          </Link>
          ))
        }
      </ul>
    </div>
  )
}
