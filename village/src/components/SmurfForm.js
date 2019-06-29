import React, { Component } from 'react'
import axios from 'axios'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      errorMessage: null
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const {name, age, height} = this.state
    const payload = { name, age, height }

    axios
    .post('http://localhost:3333/smurfs', payload)
    .then(res => {
      this.setState({
        errorMessage: null
      })
      
      this.props.updateSmurfs(res.data)
    })
    .catch(err => {
      console.log('ERROR', err.message)
      this.setState({
        errorMessage: err.message
      })
    })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          
          <p>{this.state.errorMessage}</p>

          <input
           type='text'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
           type='number'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
           type='number'
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
