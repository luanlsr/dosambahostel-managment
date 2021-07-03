import React, {useContext} from 'react'
import LogoCompleta from '../images/LogoCompleta.png'
import { Link } from 'react-router-dom'
import LoginContext from '../contexts/LoginContext'
import '../styles/Login.css'

export default function Login() {

  const {user, setUser} = useContext(LoginContext)
  
  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });

    const users = {nome: user.name, email: user.email}
    localStorage.setItem('users', JSON.stringify(users))
  };
  return (
    <div className="container">
      <div className="center">
        <img className="logo" src={LogoCompleta} alt="" />
        <form>
          <input 
            type="text" 
            placeholder="Nome"
            value={user.name}
            name="name"
            onChange={handleChange}
          />
          <input 
            type="email" 
            placeholder="Email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
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
