import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sour extends Component {
  render() {
    return (
      <div>
        {
          <div>
            {this.props.sour.businesses.map((match, i) => (
              <div key={match.id}>
                <div>
                  <h1>{`${i + 1}. ${match.name}`}</h1>
                  <img src={match.image_url} />
                  <h3>{`rating: ${match.rating}`}</h3>
                  <h3>{`phone: ${match.display_phone}`}</h3>
                  <h3>{`price: ${match.price}`}</h3>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}

const mapState = state => ({
  sour: state.sour
});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(Sour);
