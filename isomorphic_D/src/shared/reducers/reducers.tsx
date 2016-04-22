import { combineReducers } from 'redux'
import { VisibilityFilters, AddAction, SetVisibilityAction, CompleteAction, isType, Action } from './../actions/actions'
import { Todo } from './../Todo'


class State {
  constructor(
    public visibilityFilter : VisibilityFilters = VisibilityFilters.SHOW_ALL,
    public todos: Todo[] = [] ){}
}

export default function todoAppReducer(state : State = new State(), action : Action<any>) : State
{
   if (isType(action, SetVisibilityAction))
   {
     return Object.assign({}, state, {
       visibilityFilter : action.payload.visiblity
     })
   }
   else if (isType(action, AddAction))
   {
      return Object.assign({}, state, {
        todos: [
          ...state.todos, new Todo(action.payload.text, false)
        ]
      })
   }
   else if (isType(action, CompleteAction))
   {
      return Object.assign({}, state, {
        todos : state.todos.map( (todo: Todo, index: number) => {
          if (index === action.payload.id) {
            return Object.assign(new Todo('', false), todo, { completed: true })
          }
          return todo;
        })
      });
   }
   return state
}

