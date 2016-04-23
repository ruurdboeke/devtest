/// <reference path="../../../typings/main.d.ts" />

var { connect } = require ('react-redux');
import { createCompleteAction, VisibilityFilters } from './../actions/actions'
import TodoList from './TodoListComponent'
import Todo from './../../Todo'
import State from './../../State'

const getVisibleTodos = (todos : Todo[], filter : VisibilityFilters) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}

// this is not great, we are constructing a part of the ultimate type that will be sent to this component
// that component has its type defined as ITodoListComponent
const mapStateToProps = (state : State) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch : any) => {
  return {
    onTodoClick: (todoID : number) => {
      dispatch(createCompleteAction({ completed : true, id : todoID }))
    }
  }
}

const VisibleTodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoListContainer