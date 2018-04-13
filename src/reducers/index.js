import { combineReducers } from 'redux';

import ImageReducer from './image-reducer';
import FavoriteReducer from './favorite-reducer';

const rootReducer = combineReducers({
  liked: ImageReducer,
  favorite: FavoriteReducer,
});

export default rootReducer;
