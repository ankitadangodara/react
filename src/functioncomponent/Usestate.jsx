import React from 'react'
import { useState } from 'react'
const Usestate = () => {
 
    const [count,setcount] = useState('Ankita dangodara');
    const [Num,setNum] = useState(0);
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [allentry,setallentry] = useState([]);

    
    const handleclick = (e) =>{
      e.preventDefault();
      const newentry = {name: name , email:email};
     setallentry([...allentry,newentry]);
    }
   
 
    return (
   <>
   <h2>{count}</h2>
    <button className='m-2' onClick={()=>{setcount('frontend devloper')}}>click me</button>
    <button className='m-2'  onClick={()=>setNum(Num+1)}>{Num} time click</button>
    
    <form action="" onSubmit={handleclick}>
    <div className="m-5">
    <label className='m-2' htmlFor='name'>name :</label>
    <input className='m-2' value={name} onChange={(e)=>setname( e.target.value)} type='text' id='name'/><br/>
    <label className='m-2' htmlFor='email'>email :</label>
    <input className='m-2' value={email} onChange={(e)=>setemail( e.target.value)} type='email' id='email'/><br/>
     <button type='submit'>login</button>
    </div>
    </form>
    <div>
     {
       allentry.map((cur)=>{
        return(
          <div className='m-5'>
            <p className='m-4'>{cur.name}</p>
            <p className='m-4'>{cur.email}</p>
            </div>
        )
       })
     }
    </div>
   
   </>
  )
}

export default Usestate
