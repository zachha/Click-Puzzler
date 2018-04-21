import React, { Component } from "react";

const Nav = (props) => {

    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <a class="navbar-brand" href="#">
        Click Puzzler
      </a>
      <ul className="">
        <li className="text-center">{props.info}</li>
        <li className="">Score: <span>{props.score}</span></li>
        <li className="">Top Score: <span>{props.topScore}</span></li>
      </ul>
    </nav>;
}

export default Nav;