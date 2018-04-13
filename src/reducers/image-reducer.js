import { ActionTypes } from '../actions';

const initialState = {
  liked: [],
};

/* Handle state changes */
const ImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LIKE_IMAGE: {
      console.log('here2');
      return { ...state, liked: [...state.liked, action.payload] };
      // state.liked.push(action.payload);
      // return state;
      // console.log('correct');
      // console.log(action.payload);
      // return action.liked;
      // return Object.assign({}, state, {
      //   liked: action.liked,
      // })
    }
    default:
      return state;
  }
};

export default ImageReducer;
