import React from 'react'
import LogoCompleta from '../images/LogoCompleta.png'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

export default function Login() {
  return (
    <div className="container">
      <div className="center">
        <img className="logo" src={LogoCompleta} alt="" />
        <form>
          <input type="text" />
          <Link to="/home">
            <button className="btn">
              <span>ENTRAR</span>
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}
