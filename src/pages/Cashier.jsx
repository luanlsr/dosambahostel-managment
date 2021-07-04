import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import ReactAudioPlayer from 'react-audio-player';

export default function Cashier() {
  return (
    <div>
      <Header />
      <NavBar />
      <h1>Cashier</h1>
      <ReactAudioPlayer
        src="https://www.myinstants.com/media/sounds/dinheiro-mp3cut.mp3"
        autoPlay
      />
    </div>
  )
}
