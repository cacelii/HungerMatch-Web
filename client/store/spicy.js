import axios from 'axios';

const FETCH_SPICY = 'FETCH_SPICY';

const fetchSpicy = spicy => ({ type: FETCH_SPICY, spicy });

export const fetchSpicyMatches = () => dispatch =>
  axios
    .get('/yelp/spicy')
    .then(res => {
      dispatch(fetchSpicy(res.data));
    })
    .catch(err => console.log(err));

export default function(spicy = [], action) {
  switch (action.type) {
    case FETCH_SPICY:
      return action.spicy;
    default:
      return spicy;
  }
}
