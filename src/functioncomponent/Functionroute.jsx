import React, { Component } from 'react'
import { Outlet, Route,Routes } from 'react-router-dom'
import Functioncompomenu from './Functioncompomenu'
import Usestate from './Usestate'
import Useeffect from './Useeffect'
import Todolist from './Todolist'
import Useref from './Useref'
import Usememo from './Usememo'
import Usecontext from './Usecontext'
import Usecallback from './Usecallback'
import Usereducer from './Usereducer'
import Uselayouteffect from './Uselayouteffect'
import Apifetching from './Apifetching'
import Apifetchtwo from './Apifetchtwo'
import Curdopp from './Curdopp'

class Functionroute extends Component {
    render(){
  return (

             <>
             <Routes>
                 <Route path="/" element={<Functioncompomenu />} >
                     <Route path ="Usestate" element={<Usestate />} />
                  <Route path ="Useeffect" element={<Useeffect />} />
                  <Route path ="Todolist" element={<Todolist />} />
                  <Route path ="Useref" element={<Useref />} />
                  <Route path ="Usememo" element={<Usememo />} />
                  <Route path ="Usecontext" element={<Usecontext />} />
                  <Route path ="Usecallback" element={<Usecallback />} />
                  <Route path ="Usereducer" element={<Usereducer />} />
                  <Route path ="Uselayouteffect" element={<Uselayouteffect />} />
                  <Route path ="Apifetching" element={<Apifetching />} />
                  <Route path ="Apifetchtwo" element={<Apifetchtwo />} />
                  <Route path ="Curdopp" element={<Curdopp />} />
                 </Route>
             </Routes>
             <Outlet/>
         </>
  )
}
}

export default Functionroute
