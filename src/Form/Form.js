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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }
 

  render() {
    return (
      <form>
        <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={event => this.handleChange(event)}/>
        <input
        type="text"
        name="date"
        placeholder="Date (mm/dd)"
        onChange={event => this.handleChange(event)}/>
        <input
        type="text"
        name="time"
        placeholder="Time"
        onChange={event => this.handleChange(event)}/>
        <input
        type="text"
        name="numOfGuests"
        placeholder="Number of Guests"
        onChange={event => this.handleChange(event)}/>
        <input
        type="submit"
        value="Make Reservation"
        className="submit-button"/>
      </form>
    )
  }
}

export default Form;