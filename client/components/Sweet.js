import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sweet extends Component {
  render() {
    return (
      <div>
        {
          <div>
            {this.props.sweet.businesses.map((match, i) => (
              <div key={match.id}>
                <div>
                  <h1>{`${i + 1}. ${match.name}`}</h1>
                  <a href={match.url}>
                    <img src={match.image_url} />
                  </a>
                  <h3>{`Rating: ${match.rating}`}</h3>
                  <h3>{`Phone: ${match.display_phone}`}</h3>
                  <h3>{`Price: ${match.price}`}</h3>
                  <a href={match.url}>
                    <h3
                    >{`Check out the ${match.review_count} reviews on Yelp`}</h3>
                  </a>
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
  sweet: state.sweet
});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(Sweet);
