import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Smurf from './Smurf';
import SearchBar from './SearchBar'

class Smurfs extends Component {
  state = {
    filteredSmurfs: []
  }


  //FILTER 
  searchPostsHandler = e => {
    console.log(e.target.value)
    const smurfs = this.props.smurfs.filter(curr => curr.name.includes(e.target.value));
     this.setState({ filteredSmurfs: smurfs })
  };


  render() {
    return (
      <div className="smurfs-wrapper">
        <ul>
        <h1>Smurf Village</h1>
        <SearchBar 
          searchPosts={this.searchPostsHandler}
        />

         {this.state.filteredSmurfs.length > 0 
         ?  this.state.filteredSmurfs.map(smurf => {
            return (
              <div className='smurf-card' key={smurf.id}>
              <Link to={`/smurfs/${smurf.id}`}>
                <h3>{smurf.name}</h3>
              </Link>
              </div>
            );
           })
          :  this.props.smurfs.map(smurf => {
            return (
              <div className='smurf-card' key={smurf.id}>
              <Link to={`/smurfs/${smurf.id}`}>
                <h3>{smurf.name}</h3>
              </Link>
              </div>
            );
           })
          }
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
