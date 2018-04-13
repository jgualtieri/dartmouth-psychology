import { ActionTypes } from '../actions';

const FavoriteReducer = (state = -1, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_FAVORITE:
      return action.payload;
    default:
      return state;
  }
};

export default FavoriteReducer;
