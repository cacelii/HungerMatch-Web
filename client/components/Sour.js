import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sour extends Component {
  render() {
    return (
      <div className="center">
        {
          <div>
            {this.props.sour.businesses.map((match, i) => (
              <div key={match.id}>
                <div>
                  <h1>{`${i + 1}. ${match.name}`}</h1>
                  <a href={match.url}>
                    <img src={match.image_url} />
                  </a>
                  <h3>{`Price: ${match.price}`}</h3>
                  <h3>{`Rating: ${match.rating}`}</h3>
                  <h3>{`Phone: ${match.display_phone}`}</h3>
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
  sour: state.sour
});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(Sour);
