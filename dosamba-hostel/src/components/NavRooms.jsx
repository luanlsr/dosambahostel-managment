import React from 'react'
// import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FaBed} from 'react-icons/fa'
import {rooms} from '../services/rooms'
import '../styles/Guests.css'

export default function Guests() {
//   const [HosActive, setHosActive] = useState(false)
//   const [ResActive, setResActive] = useState(false)
//   const [CaiActive, setCaiActive] = useState(false)
//   const [FinActive, setFinActive] = useState(false)

//   const history = useHistory()
//   const { location: { pathname } } = history

//   useEffect(() => {
//     pathname === '/hostel' ? setHosActive(true) : setHosActive(false)
//     pathname === '/restaurante' ? setResActive(true) : setResActive(false)
//     pathname === '/caixa' ? setCaiActive(true) : setCaiActive(false)
//     pathname === '/financeiro' ? setFinActive(true) : setFinActive(false)
// }, [pathname])

  return (
    <div>
      <div>
        <ul className="rooms">
          {rooms.map((room) => (
            <Link to={`/hostel/${room.name}`}>
              <button>
                <FaBed className="bed"/>
                <li key={room.id}>{room.name}</li>
                <div className="hr"></div>
              </button>
            </Link>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
