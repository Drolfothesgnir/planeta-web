import { ADD_CONTENT, SET_ERROR, START_LOADING } from "./actionTypes";

const init = {
  pending: 0,
  error: null
};

export default (state = init, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        pending: state.pending + 1
      };

    case ADD_CONTENT:
      const {
        payload: { lang, name, content }
      } = action;
      return {
        ...state,
        pending: state.pending - 1,
        [lang]: {
          ...(state[lang] || {}),
          [name]: content
        }
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        pending: state.pending - 1
      };

    default:
      return state;
  }
};
