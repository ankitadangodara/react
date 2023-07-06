import React, { useState,useMemo } from 'react'

const Usememo = () => {
    const [count, setcount] = useState(0);
    const [counts, setcounts] = useState(2);

   
    const multiple = () =>{
        console.log('hello')
        return count * 2
    }
    const coun = useMemo(() => multiple(count), [count]);

  return (
    <>
    <h3> count * 2 : {coun}</h3>
   <h3>counts : {counts}</h3>
   <h3> count : {count}</h3>
    <button onClick={()=>{setcount(count+1)}}>click for count+</button> <br />
    <button onClick={()=>{setcounts(counts+1)}}>click for counts+</button>
    </>
  )
}

export default Usememo
