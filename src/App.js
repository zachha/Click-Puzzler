import React, { Component } from 'react';
import Nav from './components/Nav.js';
import Head from './components/Head.js';
import Wrapper from './components/Wrapper.js';
import Footer from './components/Footer.js';
import Image from './components/Image.js;'
import ImageData from './components/ImageData.json';
import './App.css';

class App extends Component {

  state = {
    picked: [],
    score: 0,
    topScore: 0,
    info: "Click your first image to begin!"
  }

  render() {
    return (
      <div className="App">
        <Nav info={this.state.info} score={this.state.score} topScore={this.state.topScore} />
        <Head />
        <Wrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
