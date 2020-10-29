import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
export default class Inside3 extends React.Component {
  state = {
    menuOpen: false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div className="App">
      <Sidebar />
      <div id="page-wrap">
        <h1>AppDividend</h1>
        <h2>Check out our tutorials the side menubar</h2>
        
      </div>
    </div>
    );
  }
}
