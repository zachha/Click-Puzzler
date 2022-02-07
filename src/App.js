import React, { Component } from 'react';
import Nav from './components/nav/Nav.js';
import Footer from './components/footer/Footer.js';
import Image from './components/image/Image.js';
import './App.css';
// importing all of my local images
import RubixOne from "./img/rubixOne.jpg";
import RubixTwo from "./img/rubixTwo.png";
import RubixThree from "./img/rubixThree.jpg";
import RubixFour from "./img/rubixFour.jpg";
import RubixFive from "./img/rubixFive.jpg";
import RubixSix from "./img/rubixSix.jpg";
import RubixSeven from "./img/rubixSeven.jpg";
import RubixEight from "./img/rubixEight.jpg";
import RubixNine from "./img/rubixNine.png";
import RubixTen from "./img/rubixTen.png";
import RubixEleven from "./img/rubixEleven.png";
import RubixTwelve from "./img/rubixTwelve.png";

class App extends Component {

  state = {
    alreadyClicked: [],
    score: 0,
    topScore: 0,
    display: "Don't click the same image twice!"
  }

  // sorts the image array in random order
  randomizeImages = () => {
    //const imgArr = images;
    const ImageArray = [{ RubixOne }, { RubixTwo }, { RubixThree }, { RubixFour }, { RubixFive }, { RubixSix }, { RubixSeven }, { RubixEight }, { RubixNine }, { RubixTen }, { RubixEleven }, { RubixTwelve }];
    ImageArray.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    console.log(ImageArray);
    return ImageArray
  }
  
  // updates score if click is correct, restarts game if it was not
  selectImage = (name) => {
    console.log("image clicked");
    let clicked = this.state.alreadyClicked;

    if(clicked.indexOf(name) > -1) {
      this.setState({
        alreadyClicked: [],
        score: 0,
        display: "Whoops You've Already Clicked That One, Try Again!"
      })
    } else {
      clicked.push(name)
      console.log(clicked);
      this.setState({
        alreadyClicked: clicked,
        score: this.state.score + 1,
        topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore,
        display: "Correct! Keep 'em Coming!"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav display={this.state.display} score={this.state.score} topScore={this.state.topScore} />
        <div className='container col-lg-7'>
          {this.randomizeImages().map(image => {
            console.log(image);
            console.log(Object.keys(image)[0]);
            return <Image 
            src={Object.values(image)[0]} 
            key={Object.keys(image)[0]} 
            name={Object.keys(image)[0]} 
            selectImage={this.selectImage} 
            />;
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
