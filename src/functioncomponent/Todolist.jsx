import React from 'react'
import { useState } from 'react'

const Todolist = () => {
const [inputData, setinputData] = useState('');
const [item, setitem] = useState([]);
const additem = () =>{
// setitem([...item,inputData])
setitem((item)=>{
    const updatelit = [...item,inputData]
    // console.log(updatelit)
    setinputData('');
    return updatelit


})
};
 function remove(ind){
  const updatelit = item.filter((ele,id)=>{
    return ind !=id
  })
  setitem(updatelit)
 }
 function removeall(){
    setitem([])
 }
  return (
   <>
   <div>
   <input className='py-1' type="text"  value={inputData}  onChange={(e)=>{setinputData(e.target.value)}} placeholder='add items'/>
  <button className='btn bg-primary text-dark ' onClick={additem} >Add</button>
   </div>
     
   <div>
    {
    item!=[] && 
        item.map((ele,ind)=>{
            return(
                <>
                <p className='mt-2' key={ind}>
                <h3 className='d-inline px-4 border border-primary'>{ele}</h3><button className='btn bg-danger text-light' onClick={()=>remove(ind)} >remove</button>
                
                </p>
                </>

            )
        })
    }
   </div>
    {item.length>=1 &&  <button className='btn bg-danger text-light' onClick={removeall} >remove all</button> }
   </>
  )
}

export default Todolist
