import { ADD_CONTENT, SET_ERROR, START_LOADING } from "./actionTypes";

export const init = {};

export default (state = init, { type, payload }) => {
  switch (type) {
    case START_LOADING:
      return {
        ...state,
        [payload.name]: {
          ...state[payload.name],
          loading: true
        }
      };

    case ADD_CONTENT: {
      const { lang, name, content } = payload;
      return {
        ...state,
        [name]: {
          ...state[name],
          [lang]: content,
          loading: false
        }
      };
    }

    case SET_ERROR: {
      const { name, error } = payload;
      return {
        ...state,
        [name]: {
          ...state[name],
          error,
          loading: false
        }
      };
    }

    default:
      return state;
  }
};
