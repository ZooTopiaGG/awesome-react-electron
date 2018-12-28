import React, { Component } from 'react';
import Slider from 'components/rightAside/slider';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render () {
    const options = {
      speed: 5000, // default 5000
      bots: true, // show bots default true
      interval: true, // isopen interval
      imgs: [
        "http://p1.music.126.net/8L1C4PL7QAT1Gav9L6LWVQ==/109951163747817794.jpg",
      ]
    }
    return (
      <div className="recommend">
        <Slider options={options}/>
      </div>
    )
  }
}

export default Recommend