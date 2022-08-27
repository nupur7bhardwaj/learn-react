import React from "react";

export default class HotelForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 0, 
      name: 'Crown Hotel', 
      description: '', 
      roomCount: 10, 
      price: 70.00
    };
  }

  handleChange = (event) => {
    this.setState({description: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.description);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>

        <label>
          Essay:
          <textarea value={this.state.description} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}