import { ADD_FAVORITES, REMOVE_FAVORITES } from "./actions";

const initialState = {
  myFavorites: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };

    case REMOVE_FAVORITES:
      const result = state.myFavorites.filter((favorite) => favorite.id !== action.payload.id);
      return { ...state, myFavorites: result };

    default:
      return { ...state };
  }
};
