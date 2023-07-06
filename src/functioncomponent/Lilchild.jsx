import React, { useContext } from 'react'
import{first,second, third} from './Usecontext'

const Lilchild = () => {
    const fname = useContext(first)
    const lname = useContext(second)
    const dis = useContext(third)
  return (
    <>
    <h1>i am a lilchild</h1>
    <h3>my name is {fname} {lname} and i am from {dis} distric</h3>
    </>
  )
}

export default Lilchild
