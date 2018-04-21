import React from "react";
import { Component } from React;
import RubixOne from '../../public/img/rubixOne.jpg';
import RubixTwo from "../../public/img/rubixTwo.png";
import RubixThree from "../../public/img/rubixThree.jpg";
import RubixFour from "../../public/img/rubixFour.jpg";
import RubixFive from "../../public/img/rubixFive.jpg";
import RubixSix from "../../public/img/rubixSix.jpg";
import RubixSeven from "../../public/img/rubixSeven.jpg";
import RubixEight from "../../public/img/rubixEight.jpg";
import RubixNine from "../../public/img/rubixNine.png";
import RubixTen from "../../public/img/rubixTen.png";
import RubixEleven from "../../public/img/rubixEleven.png";
import RubixTwelve from "../../public/img/rubixTwelve.png";

class Image extends Component {
render(props) {
    return (
        <img src={this.props.url} />
    )
}
};

export default Image;
