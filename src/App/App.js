import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations.js';
import Form from '../Form/Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allReservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservationsData => {
        // console.log(reservationsData)
        this.setState({ allReservations: reservationsData })
      })
      .catch(error => console.log(error))
  }

  addReservation = (newRes) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          id: newRes.id,
          name: newRes.name,
          date: newRes.date,
          time: newRes.time,
          number: newRes.numOfGuests
        }
      )
    })
    .then(response => response.json())
    .then(() => this.setState({ allReservations: [...this.state.allReservations, newRes] }))
    .catch(error => console.log(error));
  }

  deleteReservation = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .catch(error => console.log(error));

    const filterRes = this.state.allReservations.filter(reservation => reservation.id !== id)
    this.setState({ allReservations: filterRes});

  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservations allReservations={this.state.allReservations} deleteReservation={this.deleteReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
