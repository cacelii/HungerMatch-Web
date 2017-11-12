import axios from 'axios';

const FETCH_SOUR = 'FETCH_SOUR';

const fetchSour = sour => ({ type: FETCH_SOUR, sour });

export const fetchSourMatches = () => dispatch =>
  axios
    .get('/yelp/sour')
    .then(res => {
      dispatch(fetchSour(res.data));
    })
    .catch(err => console.log(err));

export default function(sour = [], action) {
  switch (action.type) {
    case FETCH_SOUR:
      return action.sour;
    default:
      return sour;
  }
}
