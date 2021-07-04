import React from 'react'
import {BsFillGearFill, BsSearch, BsThreeDotsVertical} from 'react-icons/bs'
import {IoPersonCircleSharp} from 'react-icons/io5'
import '../styles/Header.css'

// import LoginContext from '../contexts/LoginContext'
import LogoCompleta from '../images/LogoCompleta.png'
import { Link } from 'react-router-dom'

export default function Header() {
  // const {user} = useContext(LoginContext)

  return (
    <div className="header">
      <Link to="/">
        <img className="logoHeader" src={LogoCompleta} alt="logo" />
      </Link>
      <div className="icons">
        <BsSearch />
        <IoPersonCircleSharp />
        <BsFillGearFill />
        <BsThreeDotsVertical />
      </div>
    </div>
  )
}
