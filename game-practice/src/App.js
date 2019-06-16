import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Canvas from './components/Snake/Base/Canvas'

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.drawerToggleClickHandler}/>
    }
    return (
      <Router>
        <div className="App">
            <Sidebar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
        </div>
        <Switch>
          <Route path='/' exact />
          <Route path='/snake' component={Canvas} />
        </Switch>
      </Router>
    );
  }
 
}
export default App;
