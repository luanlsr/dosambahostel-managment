import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

export default function Header() {

  const [HosActive, setHosActive] = useState(false)
  const [ResActive, setResActive] = useState(false)
  const [CaiActive, setCaiActive] = useState(false)
  const [FinActive, setFinActive] = useState(false)

  const history = useHistory()
  const { location: { pathname } } = history

  useEffect(() => {
      pathname === '/hostel' || '/hostel/:room' ? setHosActive(true) : setHosActive(false)
      pathname === '/restaurante' ? setResActive(true) : setResActive(false)
      pathname === '/caixa' ? setCaiActive(true) : setCaiActive(false)
      pathname === '/financeiro' ? setFinActive(true) : setFinActive(false)
  }, [pathname])

  return (
    <div className="topnav">
      <Link 
        to="/hostel" 
        name="hostel"
        className={HosActive ? "active" : ""}
      >
        Hóspedes
      </Link>
      <Link 
        to="/restaurante"
        name="restaurante"
        className={ResActive ? "active" : ""}
      >
          Restaurante
      </Link>
      <Link 
        to="/caixa"
        name="caixa"
        className={CaiActive ? "active" : ""}
      >
          Caixa
      </Link>
      <Link 
        to="/financeiro"
        name="financeiro"
        className={FinActive ? "active" : ""}
      >
          Financeiro
      </Link>
    </div>
  )
}