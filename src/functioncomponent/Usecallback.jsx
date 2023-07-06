import React, { useCallback } from 'react'
import { useState } from 'react'
import Childofusecallback from './Childofusecallback'

const Usecallback = () => {
    const [count,setcount] = useState(0)
    const [item,setitem] = useState([]);
    const fun = useCallback ( () =>{
        console.log('hello')
    },[item])
  return (
    <div>
        <Childofusecallback item={item} fun={fun}/>
      <h1>this is my usecallback page</h1>
        <h2>{count}</h2>
      <button onClick={()=>{setcount(count+ 1)}} > update</button>
    </div>
  )
}

export default Usecallback
