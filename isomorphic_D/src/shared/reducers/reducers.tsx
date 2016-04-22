import { combineReducers } from 'redux'
import { VisibilityFilters, AddAction, SetVisibilityAction, CompleteAction, isType, Action } from './../actions/actions'
import Todo from './../../Todo'
import State from './../../State'



export default function todoAppReducer(state : State = new State(), action : Action<any>) : State
{
   if (isType(action, SetVisibilityAction))
   {
     return Object.assign({}, state, {
       visibilityFilter : action.payload.visibility
     })
   }
   else if (isType(action, AddAction))
   {
      return Object.assign({}, state, {
        todos: [
          ...state.todos, new Todo(action.payload.text, false, -1)
        ]
      })
   }
   else if (isType(action, CompleteAction))
   {
      return Object.assign({}, state, {
        todos : state.todos.map( (todo: Todo, index: number) => {
          if (index === action.payload.id) {
            return Object.assign(new Todo('', false, -1), todo, { completed: true })
          }
          return todo;
        })
      });
   }
   return state
}

