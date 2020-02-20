import {
  ADD_CONTENT,
  SET_CONTACT_FORM_SUBMISSION_FLAG,
  SET_CONTENT,
  SET_ERROR
} from "./actionTypes";

export const addContent = (name, content, lang) => ({
  type: ADD_CONTENT,
  payload: { name, content, lang }
});

export const setError = (name, error) => ({
  type: SET_ERROR,
  payload: { name, error }
});

export const setContent = (name, content) => ({
  type: SET_CONTENT,
  payload: { name, content }
});

export const setContactFormSubmission = (state = false) => ({
  type: SET_CONTACT_FORM_SUBMISSION_FLAG,
  payload: state
});
