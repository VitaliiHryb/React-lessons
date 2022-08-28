import React, { Component } from 'react';
import moment from 'moment';

function formatTime(offset) {
  return moment().utcOffset(offset).format('h:mm:ss A'); //got time with needet format
}

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: formatTime(props.offset), //got time offset
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: formatTime(this.props.offset), //change time evevry 1s
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); //clear interval
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
