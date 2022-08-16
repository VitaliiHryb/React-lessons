import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

// .setHours() ==> Sets the hour of a date object

//put your code here
// const formatTime = offset => {
//   const currentTime = new Date();
//   const utcOffset = currentTime.getTimezoneOffset() / 60;
//   return new Date(
//     currentTime.setHours(currentTime.getHours() + offset + utcOffset),
//   );
// };
const formatTime = offset => {
  return moment().utcOffset(offset).format('h:mm:ss A');
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      time: formatTime(props.offset),
    };

    setInterval(() => {
      this.setState({
        time: formatTime(props.offset),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;

// В файле src/Clock.jsx, опишите компоненту, которая принимает Название города
// в свойстве location и смещение по времени этого города относительно нулевого
// меридиана в свойстве offset и и отрисует такую же разметку с файла clock.html,
// где New York - это название города, а 7:00:51 AM - локальное время в этом городе
// (с учером переданного смещения)

//put your code here // New York 7:00:51 AM
// Название города ==> .location
// смещение по времени ==> .offset

// Компонента Clock должна обновлять время каждую секунду
