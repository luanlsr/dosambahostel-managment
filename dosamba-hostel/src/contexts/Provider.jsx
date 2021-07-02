// import { useState } from "react";
// import React, {useState, useEffect} from 'react'
import HostelContext from "./HostelContext";


function HostelProvider({children}) {
  // const [guests, setGuests] = useState([])

  // useEffect(() => {
  //   return () => {
      
  //   }
  // }, [])

  const context = { id: 1 }
  return (
    <HostelContext.Provider value={ context }>
      {children}
    </HostelContext.Provider>
  )
}

export default HostelProvider