import React from 'react'
import Header from './commoncompo/Header'
import { Outlet,Link } from 'react-router-dom'
import Functioncompomenu from './functioncomponent/Functioncompomenu'

const Example = () => {
  return (
    <>
    <Header/>
            <div className="container">
                <div className="row my-3">
                    
                    <div className="col-6">
                       
                    <Link to="Functioncomponent">Functional Component</Link>
                    </div>
                </div>
                <div className="row my-3">
                     
                    <div className="col-6">
                    <Outlet/>
                    </div>
                </div>
            </div>
                        

    </>
  )
}

export default Example
