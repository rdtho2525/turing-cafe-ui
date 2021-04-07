import React from 'react';
import './Reservactions.css';
import Card from '../Card/Card.js'
import PropTypes from 'prop-types';

const Reservations = ({ allReservations}) => {
  console.log(allReservations);
  const printedReservations = allReservations.map(reservation => {
    return (
      <Card
      key={reservation.id}
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
    />
    )
  })
  console.log(printedReservations)
  return (
    <div className="reservations">
    {printedReservations}
    </div>
  )
}

Reservations.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}

export default Reservations;