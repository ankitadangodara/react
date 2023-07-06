import React from 'react'
import {createContext } from 'react'
import Child from './Child'

const first = createContext()
const second = createContext()
const third = createContext()

const Usecontext = () => {
    const fname = "ankita";
    const lname = "dangodara";
    const dis = "gir-somnath";

  return (
    <>
     <first.Provider value={fname}>
        <second.Provider value={lname}>
           <third.Provider value={dis}>
           <Child/>
           </third.Provider>
        </second.Provider>
     </first.Provider>
    </>
  )
}

export default Usecontext
export{first,second,third}