import {
  ADD_CONTENT,
  SET_CONTACT_FORM_SUBMISSION_FLAG,
  SET_CONTENT,
  SET_ERROR
} from "./actionTypes";

export const addContent = data => ({
  type: ADD_CONTENT,
  payload: data
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err
});

export const setContent = (name, content) => ({
  type: SET_CONTENT,
  payload: { name, content }
});

export const setContactFormSubmission = (state = false) => ({
  type: SET_CONTACT_FORM_SUBMISSION_FLAG,
  payload: state
});
