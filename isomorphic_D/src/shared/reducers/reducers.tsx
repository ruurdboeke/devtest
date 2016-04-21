import { combineReducers } from 'redux'
import { Action, Actions, VisibilityFilters } from './../actions/actions'



function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action : Action) {
  switch (action.type) {
    case Actions.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action : Action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case Actions.COMPLETE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
