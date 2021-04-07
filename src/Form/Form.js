import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      numOfGuests: 0
    }
  }

  render() {
    return (
      <form>
        <input
        type="text"
        placeholder="Name"/>
        <input
        type="text"
        placeholder="Date (mm/dd)"/>
        <input
        type="text"
        placeholder="Time"/>
        <input
        type="text"
        placeholder="Number of Guests"/>
        <input
        type="submit"
        value="Make Reservation"
        className="submit-button"/>
      </form>
    )
  }
}

export default Form;