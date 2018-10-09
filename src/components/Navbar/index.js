import React, { Component } from 'react';
import { 
  Navbar as RMNavbar, NavItem
} from 'react-materialize'
class Navbar extends Component {
  render() {
    return (
      <RMNavbar brand="Dashboard App" right>
        {/* <NavItem>Getting started</NavItem>
        <NavItem>Components</NavItem> */}
      </RMNavbar>
    );
  }
}

export default Navbar;
