import { createStore, combineReducers } from "redux";

let id = 0;
let date = new Date();
const initialState = [{ id, text: "test", date: date.toLocaleDateString() }];

const editorReducer = (state = false, action) => {
  if (action.type === "EDITOR_VISIBLE") return true;
  if (action.type === "EDITOR_CLOSE") return false;
  return false;
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [
        {
          id: ++id,
          text: payload.text,
          date: payload.date,
        },
        ...state,
      ];

    case "DELETE_TODO":
      return state.filter((item) => item.id !== payload.id);

    case "EDIT_TODO":
      return state.map((item) => {
        if (item.id === payload.id) {
          return {
            id: payload.id,
            text: payload.text,
            date: payload.date,
          };
        }
        return item;
      });

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  editor: editorReducer,
  todos: todoReducer,
});

const editorVisible = { type: "EDITOR_VISIBLE" };
const editorClose = { type: "EDITOR_CLOSE" };

const addTodo = (text) => {
  let date = new Date();
  return {
    type: "ADD_TODO",
    payload: { text, date: date.toLocaleTimeString() },
  };
};
const deleteTodo = (id) => ({ type: "DELETE_TODO", payload: { id } });

const editTodo = (id, text) => {
  let date = new Date();
  return {
    type: "EDIT_TODO",
    payload: { id, text, date: date.toLocaleTimeString() },
  };
};

export { addTodo, editTodo, deleteTodo, editorVisible, editorClose };

export const store = createStore(rootReducer);
