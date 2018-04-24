import React from "react";
import { Component } from 'react';
import './image.css'


class Image extends Component {

  render(props) {
    return (
    <img 
    className="img-thumbnail" 
    src={this.props.src} 
    alt="rubix cube" 
    onClick={() => this.props.selectImage(this.props.name)}
    />
    )
  }
};

export default Image;
