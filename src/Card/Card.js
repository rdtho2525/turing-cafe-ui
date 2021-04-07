import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ id, name, date, time, number, deleteReservation}) => {
  return (
    <div className="card">
      <p id={name} className="name">{name}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button onClick={() => deleteReservation(id)}>Cancel</button>
    </div>
  )
}

export default Card;