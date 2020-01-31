import { ADD_CONTENT, SET_ERROR, START_LOADING } from "./actionTypes";

const init = {
  loading: {
    layout: true
  },
  error: {
    layout: null
  },
  en: {},
  ua: {
    layout: {}
  },
  ru: {}
};

const loadReducer = (state, {type, payload: {name}}) => {
  switch (type) {
    case START_LOADING: {
      return {
        ...state,
        [name]: true
      };
    }

    case SET_ERROR:
    case ADD_CONTENT: {
      return {
        ...state,
        [name]: false
      }
    }

    default:
      return state;
  }
}

export default (state = init, { type, payload }) => {
  switch (type) {

    case START_LOADING:
      return {
        ...state,
        loading: loadReducer(state.loading, {type, payload})
      };

    case ADD_CONTENT: {
      const { lang, name, content } = payload;
      return {
        ...state,
        loading: loadReducer(state.loading, {type, payload}),
        [lang]: {
          ...(state[lang] || {}),
          [name]: content
        }
      };
    }

    case SET_ERROR: {
      const {name, error} = payload;
      return {
        ...state,
        error: {
          ...state.error,
          [name]: error
        },
        loading: loadReducer(state.loading, {type, payload}),
      };
    }

    default:
      return state;
  }
};
