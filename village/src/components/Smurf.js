import React from 'react'
import axios from 'axios'

class Smurf extends React.Component {
   state = {
      name:'',
      age: '',
      height: '',
      errorMessage: null
   }
  
     handleInputChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
     }

     updateSmurf = (e) => {
       e.preventDefault()
       const id = this.props.match.params.id
       const { name, age, height } = this.state
       const payload = { name, age, height }

       axios.put(`http://localhost:3333/smurfs/${id}`, payload)
          .then(res=> {
            this.setState({
              errorMessage: null
            })
            this.props.updateSmurfs(res.data)
            this.props.history.push('/')
          })
          .catch(err => {
            this.setState({
              errorMessage: err.message
            })
          })
       }

     deleteSmurf = (e) => {
      e.preventDefault()
      const id = this.props.match.params.id

      axios.delete(`http://localhost:3333/smurfs/${id}`)
         .then(res=> {
           this.setState({
             errorMessage: null
           })
           this.props.updateSmurfs(res.data)
           this.props.history.push('/')
         })
         .catch(err => {
          this.setState({
            errorMessage: err.message
          })
         })
     }

   render() {
     const id = this.props.match.params.id
     const smurf = this.props.smurfs.find(smurf => `${smurf.id}` === id)
     if(!smurf) {
       return <div>Loading...</div>
      }

    return (
      <div className="smurf-page-wrapper"> 
       <div className="smurf-page-card">
         <h3>{smurf.name}</h3>
         <strong>{smurf.height} m tall</strong>
         <p>{smurf.age} smurf years old</p>
       </div>
          <div className="SmurfForm">
          <form onSubmit={this.updateSmurf}>

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
            <div>
              <button type="submit">Save</button>
              <button type="button" onClick={this.deleteSmurf}>Delete</button>
            </div>
          </form>
        </div>
      </div>
    );
   }
};

export default Smurf;

