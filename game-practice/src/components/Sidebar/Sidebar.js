import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import styles from './styles'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './sidebar.css'


const Sidebar = props => (
  <Router>
    <header className="sidebar" style={styles.toolbar}>
    <nav className="sidebar__navigation" style={styles.toolbar__navigation}>
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="sidebar__logo"><a href="/" style={styles.linkStyle}>LOGO</a></div>
      <div className="spacing"/>
      <div className="sidebar__navigation-items">
        <ul>
          <li><NavLink to='/' className="nav_link" >Home</NavLink> </li>
          <li><NavLink to='/snake' className="nav_link">Snake</NavLink> </li>
          <li><NavLink to='/simon' className="nav_link">Simon</NavLink> </li>
        </ul>
      </div>
    </nav>
  </header>
  </Router>
  
);

export default Sidebar