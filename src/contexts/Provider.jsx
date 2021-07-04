import { useState } from "react";
// import React, {useState, useEffect} from 'react'
import Context from "./Context";


function HostelProvider({children}) {
  const [user, setUser] = useState({
    name: '',
    email: '',
  })

  const context = { user, setUser}
  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  )
}

export default HostelProvider