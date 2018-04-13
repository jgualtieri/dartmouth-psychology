/* Keys for action types */
export const ActionTypes = {
  LIKE_IMAGE: 'LIKE_IMAGE',
  SELECT_FAVORITE: 'SELECT_FAVORITE',
};

export function likeImages(likedImages) {
  console.log(likedImages);
  console.log('here');
  return {
    type: ActionTypes.LIKE_IMAGE,
    payload: likedImages,
  };
}

export function selectFavorite(imageNum) {
  return {
    type: ActionTypes.SELECT_FAVORITE,
    payload: imageNum,
  };
}
