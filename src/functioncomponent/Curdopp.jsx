import React, { useState } from 'react'

const Curdopp = () => {
    const[tableData,settableData]=useState([])
    const [editClick,seteditClick]=useState(false)
    const [editIndex,seteditIndex]=useState("")

    const [Inputs,setInputs] = useState(
        {
            name: "",
            email: "",
        }
    );
    const handleChange = (e) =>{
    setInputs({
        ...Inputs,
        [e.target.name]:e.target.value,
        // [e.target.email]:e.target.value
    })
    }
    const handlesubmit = (e) =>{

    e.preventDefault();
    if(editClick){
        const tempdata = tableData
        Object.assign(tempdata[editIndex],Inputs)
        settableData([...tempdata])
        seteditClick(false)
    }
    else{
        setInputs({
            name:"",
            email:""
        })
        settableData([...tableData,Inputs])
    }
    // console.log("Inputs", Inputs)

    }
    const handledelete =(ind) =>{   
        const filterdata = tableData.filter((item,i)=>i !== ind)
        settableData(filterdata)
    }
    const handleedit =(ind)=>{
        const tdata = tableData[ind]
        setInputs({name: tdata.name, email: tdata.email });
        seteditClick(true)
        seteditIndex(ind)
        // console.log("tdata" , tdata)
    }
  return (
    <>
    <div className='min-h-screen bg-warning text-center'>
    <h1 className='text-center p-2'>curd opperation</h1>
     <form action="" onSubmit={handlesubmit}>
        <div className='p-3'>
            <label >Name : </label>
            <input required placeholder='enter your name' name='name'  type="text"  Value={Inputs.name} onChange={handleChange}/>
        </div>
        <div className='p-3'>
            <label >email : </label>
            <input required placeholder='enter your email' name='email' type="email" Value={Inputs.email}  onChange={handleChange}/>
        </div>
        
        <button type='submit' className='bg-primary px-2 my-3'>{editClick? 'update' : "add"}</button>
    
     </form>
    </div>
    <div>
    <table className='w-100 text-center'>
       <thead>
       <tr>
            <th>Name</th>
            <th>Emai</th>
            <th>Action</th>
        </tr>
       </thead>
         <tbody>
            {
                tableData.map((item,i)=>(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                            <button onClick={()=>handleedit(i)}>Edit</button>
                            <button onClick={()=>handledelete(i)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
         </tbody>
     </table>
    </div>
    </>
  )
}

export default Curdopp
