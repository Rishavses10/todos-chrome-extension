import { APP } from "../ActionTypes/core";

const _ = require('lodash');


export const setAppTheme = (theme) => {
  return {
    type: APP.SET_APP_THEME,
    theme: theme
  }
}

export const addTodo = (text) => {
  return {
    type: APP.ADD_TODO,
    payload: {
      text: text,
      uid: _.uniqueId()
    }
  }
}

export const removeTodo = (uid) => {
  return {
    type: APP.REMOVE_TODO,
    uid: uid
  }
}