import React , { Component } from 'react'
import FlipNumbers from 'react-flip-numbers';

// function Demo() {
//   return <FlipNumbers height={12} width={12} color="red" background="white"
//     play perspective={1000} numbers="12345" delay={5} />;
      // <React.Fragment>
      //   <div>
      //     <h1>
      //       hello
      //     </h1>
      //   </div>
      // </React.Fragment>
     
    
//}
  

//export default Demo;
var data = new Date();

class Demo extends Component {
  // var data = new Date();
//   var Hour = now.getHours();
// var Min = now.getMinutes();
// var Sec = now.getSeconds();
  // var now = new Date()
  state = {
  
    timeRemaining: new Date().getSeconds
      (),

  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        timeRemaining: this.state.timeRemaining,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <FlipNumbers
            play
            color="#fff"
            background="#333333"
            width={50}
            height={50}
            numbers={`${this.state.timeRemaining}`}
          />
        </div>
      </div>
    );
  }
}

export default Demo;