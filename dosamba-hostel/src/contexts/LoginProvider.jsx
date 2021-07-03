import { useState } from "react";
// import React, {useState, useEffect} from 'react'
import LoginContext from "./LoginContext";


function HostelProvider({children}) {
  const [user, setUser] = useState({
    name: '',
    email: '',
  })

  const context = { user, setUser}
  return (
    <LoginContext.Provider value={ context }>
      {children}
    </LoginContext.Provider>
  )
}

export default HostelProvider