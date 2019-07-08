import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs-wrapper">
        <ul>
        <h1>Smurf Village</h1>
          {this.props.smurfs.map(smurf => {
            return (
              <div className='smurf-card' key={smurf.id}>
              <Link to={`/smurfs/${smurf.id}`}>
                <h3>{smurf.name}</h3>
              </Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
