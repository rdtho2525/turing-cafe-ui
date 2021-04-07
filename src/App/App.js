import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations.js';

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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations allReservations={this.state.allReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
