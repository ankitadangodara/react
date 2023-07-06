import React, { useReducer } from 'react'
const initialstate = 0
const reducer = (val,action) => {
    switch (action) {
        case   'decrement':
        return val - 1 
        case   'increment':
        return val + 1
        default :
          
    }
}
const Usereducer = () => {
    const [count,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
      <h1>this is my usereducer page</h1>
      <h3>{count}</h3>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('increment')}>increment</button>
    </div>
  )
}

export default Usereducer
