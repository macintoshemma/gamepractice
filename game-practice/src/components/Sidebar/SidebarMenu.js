import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import '../../styles/SidebarMenu.css'

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <h2>Home</h2>,
  },
  {
    path: '/snake',
    sidebar: () => <div>SNAKE</div>,
    main: () => <h2>Snake</h2>,
  },
  {
    path: '/simon',
    sidebar: () => <div>SIMON</div>,
    main: () => <h2>Simon</h2>,
  },
]

class SidebarMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <div className='toggle'>
          <div className='sidebar-container'>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li><NavLink to='/'style={{color: 'white', textDecoration: 'none'}} >Home</NavLink> </li>
            <li><NavLink to='/snake' style={{color: 'white', textDecoration: 'none'}}>SNAKE</NavLink> </li>
            <li><NavLink to='/simon' style={{color: 'white', textDecoration: 'none'}}>SIMON</NavLink> </li>
          </ul>

          {routes.map(route => (
            <Route 
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
          </div>

          <div style={{flex: 1, padding: '10px'}}>
          {routes.map(route => (
            <Route 
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}

          </div>
        </div>
      </Router>
      </React.Fragment>
      
    )
  }
}

export default SidebarMenu