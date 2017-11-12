import React, { Component } from 'react';
import { connect } from 'react-redux';

class Spicy extends Component {
  render() {
    return (
      <div>
        {
          <div>
            {this.props.spicy.businesses.map((match, i) => (
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
  spicy: state.spicy
});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(Spicy);
