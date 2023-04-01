import { ADD_FAVORITES, REMOVE_FAVORITES, LOGIN, LOGOUT } from "./actions";
import users from '../users.json'

const initialState = {
  myFavorites: [],
  access: false,
  loginFailure: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };

    case REMOVE_FAVORITES:
      const result = state.myFavorites.filter((favorite) => favorite.id !== action.payload.id);
      return { ...state, myFavorites: result };
      
    case LOGIN:
      console.log('LOGIN', action)
      const { username, password } = action.payload
      const maybeUser = users.find((user) => user.password === password && user.username === username)

      if(maybeUser) {
        return {...state, access: true}
      }
      return {...state, loginFailure: true}

    case LOGOUT:
      return {...state, loginFailure: false, access: false}

    default:
      return { ...state };
  }
};
