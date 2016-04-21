/*
 * action types
 */
export const enum Actions{
'ADD_TODO',
'COMPLETE_TODO',
'SET_VISIBILITY_FILTER'
}

/*
 * other constants
 */

export const enum VisibilityFilters {
  'SHOW_ALL',
  'SHOW_COMPLETED',
  'SHOW_ACTIVE'
}

export class Action{
    type : Actions;
    id : number;
}

/*
 * action creators
 */

export function addTodo(text : string) {
  return { type: Actions.ADD_TODO, text }
}

export function completeTodo(index : number) {
  return { type: Actions.COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter : VisibilityFilters) {
  return { type: Actions.SET_VISIBILITY_FILTER, filter }
}