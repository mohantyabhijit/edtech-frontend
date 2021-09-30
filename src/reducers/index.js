import { ADD_TODO } from '../actions';
import { RENDER_TODO_LIST,RENDER_BLOG } from '../actions';
const initialState = {
  toDoList: [],
  blogList: [],
};

export default function toDoApp(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case RENDER_TODO_LIST:
      return {
        ...state,
        toDoList: action.toDoList
      };
    case RENDER_BLOG:
      return {
        ...state,
        blogList: action.blogList,
      };
    case ADD_TODO:
      let newToDoList = [
        ...state.toDoList,
        {
          ...action.toDoItem
        }
      ];
      return {
        ...state,
        toDoList: newToDoList
      };
    default:
      return state;
  }
}

