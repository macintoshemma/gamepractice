import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import drawerToggleButton from './components/SideDrawer/DrawerToggleButton';

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
      <div className="App">
          <div className="title">
          <main style={{marginTop: '64px'}}>
           <p>
            game practice
           </p>
          </main>
          </div>
          <Sidebar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
      </div>
    );
  }
 
}
export default App;
