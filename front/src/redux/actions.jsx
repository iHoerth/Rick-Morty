export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";

export const addFavorites = (payload) => {
  return {
    type: ADD_FAVORITES,
    payload: payload,
  };
};

export const removeFavorites = (payload) => {
  return {
    type: REMOVE_FAVORITES,
    payload: payload,
  };
};
