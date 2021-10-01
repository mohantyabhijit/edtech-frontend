import { ADD_TODO } from '../actions';
import { RENDER_TODO_LIST,RENDER_BLOG } from '../actions';

export default function apolloApp(state = {}, action) {
  console.log(state);
  switch (action.type) {
    case RENDER_BLOG:
      return {
        ...state,
        blogList: action.blogList,
      };
    default:
      return state;
  }
}

