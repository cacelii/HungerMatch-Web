import axios from 'axios';

const FETCH_SALTY = 'FETCH_SALTY';

const fetchSalty = salty => ({ type: FETCH_SALTY, salty });

export const fetchSaltyMatches = () => dispatch =>
  axios
    .get('/yelp/salty')
    .then(res => {
      dispatch(fetchSalty(res.data));
    })
    .catch(err => console.log(err));

export default function(salty = [], action) {
  switch (action.type) {
    case FETCH_SALTY:
      return action.salty;
    default:
      return salty;
  }
}
