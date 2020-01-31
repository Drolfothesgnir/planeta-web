import { ADD_CONTENT, SET_ERROR, START_LOADING } from "./actionTypes";
import { http } from "../../utilities/http";

export const addContent = data => ({
  type: ADD_CONTENT,
  payload: data
});

export const startLoading = data => ({
  type: START_LOADING,
  payload: data
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err
});

export const fetchContent = ({ url, parser, lang, name }) => dispatch => {
  //  cache logic;
  let cache = false;
  if (!cache) {
    dispatch(startLoading({ name }));
    http
      .get(url)
      .then(({ data }) => {
        const content = parser(data);
        dispatch(
          addContent({
            content,
            lang,
            name
          })
        );
      })
      .catch(error => {
        dispatch(
          setError({
            name,
            error
          })
        );
      });
  }
};
