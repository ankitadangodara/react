import React,{useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
}
from 'mdb-react-ui-kit';

import Header from './commoncompo/Header'
import { json } from 'react-router-dom';

const Register = () => {
    const[name,setname] = useState("")
    const[password,setpassword] = useState("")
    const[email,setemail] = useState("")
    const handlesubmit = (e)=>{
        e.preventDefault()
        let data = {name,email,password}
        // console.log(data)
        fetch("http://localhost:800/user",{
            method: "POST",
            headers:{
                "Content-Type" :"application/Json",
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            console.log("done");

        }).catch((err)=>{
            console.log("error");
        })
    }
  return (
<>
<Header/>
 <h1 className='text-center my-2 text-uppercase text-primary'>this is my registration from</h1>

 <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
        <form onSubmit={handlesubmit}>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput value={name} onChange={(e)=>setname(e.target.value)} label='Your Name' id='form1' type='text' className='w-100'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput value={email} onChange={(e)=>setemail(e.target.value)} label='Your Email' id='form2' type='email'/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput value={password} onChange={(e)=>setpassword(e.target.value)} label='Password' id='form3' type='password'/>
        </div>


        <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

      </form>
      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
     
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
</>
  )
}

export default Register
