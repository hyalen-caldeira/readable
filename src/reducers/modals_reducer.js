import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const initialState = {
  newPost: false,
  editPost: false,
  editComment: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        [action.payload]:true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        [action.payload]: false
      }
    default:
      return state;
  }
}
