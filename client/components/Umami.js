import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Umami extends Component {
  render() {
    return (
      <div>
        {
          <div>
            {this.props.umami.businesses.map((match, i) => (
              <div key={match.id}>
                <div>
                  <h1>{`${i + 1}. ${match.name}`}</h1>
                  <Link to={match.url}>
                    <img src={match.image_url} />
                  </Link>
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
  umami: state.umami
});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(Umami);
