import { useState } from "react";
// import React, {useState, useEffect} from 'react'
import HostelContext from "./HostelContext";


function HostelProvider({children}) {
  const [HosActive, setHosActive] = useState(false)
  const [ResActive, setResActive] = useState(false)
  const [CaiActive, setCaiActive] = useState(false)
  const [FinActive, setFinActive] = useState(false)

  const context = { 
    HosActive, 
    ResActive, 
    CaiActive, 
    FinActive,
    setHosActive,
    setResActive,
    setCaiActive,
    setFinActive
  }
  return (
    <HostelContext.Provider value={ context }>
      {children}
    </HostelContext.Provider>
  )
}

export default HostelProvider