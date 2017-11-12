import axios from 'axios';

const FETCH_UMAMI = 'FETCH_UMAMI';

const fetchUmami = umami => ({ type: FETCH_UMAMI, umami });

export const fetchUmamiMatches = () => dispatch =>
  axios
    .get('/yelp/umami')
    .then(res => {
      dispatch(fetchUmami(res.data));
    })
    .catch(err => console.log(err));

export default function(umami = [], action) {
  switch (action.type) {
    case FETCH_UMAMI:
      return action.umami;
    default:
      return umami;
  }
}
