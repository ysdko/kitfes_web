import React, { Component } from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'
export default class HeroText extends Component {

  render() {

    return (
      <React.Fragment>
        <Typist>
          <div style={{ color: "white", fontSize: '6vw'}} >
            <span> Welcome to KIT IZUKA</span>
          {/* <Typist.Delay ms={500} />
          <br />This won't be animated until 500ms after the first sentenced is rendered */}
            <Typist.Backspace count={5} delay={1000} />
            <span> Festival</span>
            <Typist.Delay ms={500} />
            <span>.</span>
            <Typist.Delay ms={500} />
            <span>.</span>
            <Typist.Delay ms={500} />
            <span>.</span>
            <Typist.Delay ms={500} />
            {/* <span>sudo apt update</span> */}
            </div>
          </Typist>
      </React.Fragment>
    )
  }

}