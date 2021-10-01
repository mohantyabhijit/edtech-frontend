export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';
export const RENDER_BLOG = 'RENDER_BLOG';


  export function loadBlogList() {
    return {
      type: RENDER_BLOG
    };
  }