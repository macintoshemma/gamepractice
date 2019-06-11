import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import './SideDrawer.css'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer'

  if(props.show){
    drawerClasses = 'side-drawer open'

  }
 return (
  <Router>
  <nav className={drawerClasses}>
    <ul>
      <li><NavLink to='/' className="nav_link-side-drawer" >Home</NavLink> </li>
      <li><NavLink to='/snake' className="nav_link-side-drawer">Snake</NavLink> </li>
      <li><NavLink to='/simon' className="nav_link-side-drawer">Simon</NavLink> </li>
    </ul>
  </nav>
</Router>
 ) 
}


export default sideDrawer;