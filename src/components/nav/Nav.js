import React, { Component } from "react";
import './nav.css'

class Nav extends Component {

  render(props) {
    return <nav className="navbar navbar-dark navbar-expand-lg bg-dark text-light justify-content-center">
        <a className="navbar-brand" id="appTitle" href="/">
          Click Puzzler
        </a>
        <div className="" id="display">
          <span>{this.props.display}</span>
          <div id="score">
            Score: <span>{this.props.score}</span>
          </div>
          <div id="topScore">
            Top Score: <span>{this.props.topScore}</span>
          </div>
        </div>
      </nav>;
  }
}

export default Nav;