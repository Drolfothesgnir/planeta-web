import { ADD_CONTENT, SET_ERROR, START_LOADING } from "./actionTypes";
import http from "../../utilities/http";
import storage from "../../utilities/storage";

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
  const content = storage.getItem("__content:" + name);
  if (!content) {
    dispatch(startLoading({ name }));
    http
      .get(url, { params: { lang } })
      .then(({ data }) => {
        const newContent = {
          content: parser(data),
          lang,
          name
        };
        dispatch(addContent(newContent));
        storage.setItem("__content:" + name, newContent);
      })
      .catch(error => {
        dispatch(
          setError({
            name,
            error
          })
        );
      });
  } else {
    dispatch(addContent(content));
  }
};
