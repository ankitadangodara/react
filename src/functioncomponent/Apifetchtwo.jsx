import React, { useEffect, useState } from 'react'

const Apifetchtwo = () => {
    const [users,setusers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then(resp => resp.json())
        .then(json => setusers(json))
    },[])
  return (
   <>
 <table border={1}>
    <tr className='text-align-center' >
        <th >userid</th>
        <th>title</th>
        <th>complete</th>
    </tr>
    {
         users.map(user => (
            <tr key={user.id}>
              <td>{user.userId}</td>
              <td>{user.title}</td>
              <td>{user.completed ? 'true' : ' false'}</td>
            </tr>
          ))}
 </table>
   </>
  )
}

export default Apifetchtwo
