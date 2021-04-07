import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ id, name, date, time, number}) => {
  return (
    <div className="card">
      <p id={name} className="name">{name}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
    </div>
  )
}

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   time: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired
// }

export default Card;