import { APP } from "../ActionTypes/core";

export const appTheme = (theme = 'light', action) => {
  switch(action.type) {
    case APP.SET_APP_THEME: return action.theme;
    default: return theme;
  }
}

export const todos = (prevTodos = [], action) => {
  switch(action.type) {
    case APP.ADD_TODO: return [...prevTodos, action.payload];
    case APP.REMOVE_TODO: return prevTodos.filter(todo => todo.uid !== action.uid);
    default: return prevTodos;
  }
}

