export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

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

export const login = (payload) => {
  return {
    type: LOGIN,
    payload: payload
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}
