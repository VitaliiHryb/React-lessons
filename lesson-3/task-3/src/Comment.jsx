import React from 'react';
import UserInfo from './UserInfo';
// import moment from 'coment';
import './comment.scss';

// added
const moment = new Date().getDate();

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.user} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
