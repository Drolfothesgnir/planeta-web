import {ADD_CONTENT} from "./actionTypes";

export const addContent = (data) => {
    return {
        type: ADD_CONTENT,
        payload: data
    }
};