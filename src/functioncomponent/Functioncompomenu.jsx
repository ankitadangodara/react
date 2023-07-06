import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
 class Functioncompomenu extends Component {
  render() {
    return (
      <>
         
        <div className="row">
                <div className="col-12 ">

                <ul>
                    <li><Link to="Usestate">Usestate</Link></li>
                    <li><Link to="Useeffect">UseEffect</Link></li>
                    <li><Link to="Todolist">ToDolist</Link></li>
                    <li><Link to="Useref">Useref</Link></li>
                    <li><Link to="Usememo">Usememo</Link></li>
                    <li><Link to="Usecontext">Usecontext</Link></li>
                    <li><Link to="Usecallback">Usecallback</Link></li>
                    <li><Link to="Usereducer">Usereducer</Link></li>
                    <li><Link to="Uselayouteffect">Uselayouteffect</Link></li>
                    <li><Link to="Apifetching">Apifetching</Link></li>
                    <li><Link to="Apifetchtwo">Apifetchtwo</Link></li>
                    <li><Link to="Curdopp">Curd opperation</Link></li>
                </ul>
                </div>
            </div>
            
                   <Outlet></Outlet>
      </>
    );
  }
}
export default Functioncompomenu;