/// <reference path="../../../typings/main.d.ts" />

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
          ...state.todos, new Todo(action.payload.text, false, 
            state.todos.length == 0 ? 0 : state.todos[state.todos.length -1].id +1)
        ]
      })
   }
   else if (isType(action, CompleteAction))
   {
      return Object.assign({}, state, {
        todos : state.todos.map( (todo: Todo) => {
          if (todo.id === action.payload.id) {
            return new Todo(todo.text, action.payload.completed, todo.id);
          }
          return todo;
        })
      });
   }
   return state
}

