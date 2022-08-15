import React from 'react';
import moment from 'moment';

function getFullYears(birthDate) {
  return moment(new Date()).diff(moment(birthDate), 'years');
}

const Greeting = props => {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${getFullYears(
        props.birthDate,
      )} years old`}
    </div>
  );
};

export default Greeting;

// My name is John Doe. I'm 17 years old

// (new Date('2001-01-01T11:11:11.819Z')
