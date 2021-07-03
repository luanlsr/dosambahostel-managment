import React, { useEffect, useContext } from 'react'
import HostelContext from '../contexts/HostelContext'
import { Link, useHistory } from 'react-router-dom'
import '../styles/NavBar.css'

export default function Header() {
  const {
    HosActive, 
    ResActive, 
    CaiActive, 
    FinActive,
    setHosActive,
    setResActive,
    setCaiActive,
    setFinActive
    } = useContext(HostelContext)
  // const [HosActive, setHosActive] = useState(false)
  // const [ResActive, setResActive] = useState(false)
  // const [CaiActive, setCaiActive] = useState(false)
  // const [FinActive, setFinActive] = useState(false)

  const history = useHistory()
  const { location: { pathname } } = history

  useEffect(() => {
      pathname === '/hostel' ? setHosActive(true) : setHosActive(false)
      pathname === '/restaurante' ? setResActive(true) : setResActive(false)
      pathname === '/caixa' ? setCaiActive(true) : setCaiActive(false)
      pathname === '/financeiro' ? setFinActive(true) : setFinActive(false)
  }, [pathname, setHosActive, setResActive, setCaiActive, setFinActive])

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