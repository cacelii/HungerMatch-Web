import axios from 'axios';

const FETCH_SWEET = 'FETCH_SWEET';

const fetchSweet = sweet => ({ type: FETCH_SWEET, sweet });

export const fetchSweetMatches = () => dispatch =>
  axios
    .get('/yelp/sweet')
    .then(res => {
      dispatch(fetchSweet(res.data));
    })
    .catch(err => console.log(err));

export default function(sweet = [], action) {
  switch (action.type) {
    case FETCH_SWEET:
      return action.sweet;
    default:
      return sweet;
  }
}
