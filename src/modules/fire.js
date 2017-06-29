import fetch from 'isomorphic-fetch';
// constants
export const FIRE_ADD = 'FIRE_ADD';
export const FIRE_DECREASE = 'FIRE_DECREASE';
export const FIRE_FETCH_SUCCESS = 'FIRE_FETCH_SUCCESS';

// sync actions
export const incrementFire = () =>
  ({ type: FIRE_ADD, payload: null });
export const decreaseFire = () =>
  ({ type: FIRE_DECREASE, payload: null });
export const fireFetchSuccess = fire =>
 ({ type: FIRE_FETCH_SUCCESS, payload: fire });

// Async actions creators
export const fetchFire = () => dispatch =>
  fetch('http://localhost:8080/api/example')
  .then(response => response.json())
  .then((data) => {
    dispatch(fireFetchSuccess(data.fire));
  })
    .catch((error) => {
      console.error(error);//eslint-disable-line
    });

// Reducer
const initialState = {
  fire: '',
  fireSize: 0,
};

export default function fireReducer(state = initialState, action) {
  switch (action.type) {
    case FIRE_ADD:
      return {
        ...state,
        fireSize: state.fireSize + 1,
      };
    case FIRE_DECREASE:
      return {
        ...state,
        fireSize: state.fireSize <= 0 ? state.fireSize : state.fireSize - 1,
      };
    case FIRE_FETCH_SUCCESS:
      return {
        ...state,
        fire: action.payload,
      };
    default:
      return state;
  }
}
