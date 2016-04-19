import Immutable from 'immutable';

var defaultState = Immutable.List<{}>();

export default function todoReducer(state = defaultState, action : any) {
  switch(action.type) {
    case 'CREATE_TODO':
      return state.concat(action.text);
    case 'EDIT_TODO':
      return state.set(action.id, action.text);
    case 'DELETE_TODO':
      return state.delete(action.id);
    default:
      return state;
  }
}
