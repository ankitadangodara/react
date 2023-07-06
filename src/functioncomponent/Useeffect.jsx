import React, { useMemo } from 'react'
import { useEffect,useState } from 'react'

const Useeffect = () => {
 const [count,setcount] = useState(0);
 const [number,setnumber] = useState(0);
 useEffect(()=>{
  if(number>=1){
    document.title = `chats (${number})`
  }
  else{
    document.title = `chats`
  }
  
  // console.log('hello effect')
 
 });
//  useEffect(()=>{
//   alert('hellow use effect')
//  },[]
//  );

  return (
    <>
      <h1>hellow use effect</h1>
      <h2>{count}</h2>
       <button className='btn' onClick={()=>{setcount(count + 1)}}> click me </button>
       <button className='btn' onClick={()=>{setnumber(number + 1)}}> click for title change </button>
    </>
  )
}

export default Useeffect
