import React, { Component } from 'react';
import PersistentDrawerLeft from './Menu.js';
import Slideshow from './Slide.js';
// import { Container } from '@material-ui/core';
// import SimpleContainer from './Container'

// import FlipNumbers from 'react-flip-numbers';



class Demo extends Component {
  // var data = new Date();
  //   var Hour = now.getHours();
  // var Min = now.getMinutes();
  // var Sec = now.getSeconds();
  // var now = new Date() 
  render() {
    return (
      <React.Fragment>
        < PersistentDrawerLeft />
        {/* <ButtonAppBar /> */}
        {/* <SimpleContainer /> */}
        <Slideshow />
      </React.Fragment>
    )
  }
}
export default Demo;