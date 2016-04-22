/// <reference path="../../../typings/main.d.ts" />

var { connect } = require ('react-redux');
import { createSetVisibilityAction, VisibilityFilters } from './../actions/actions'
import LinkComponent from '../components/LinkComponent'
import Todo from './../../Todo'
import State from './../../State'

const mapStateToProps = (state : State , ownProps : any) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch : any, ownProps : any) => {
  return {
    onClick: () => {
      dispatch(createSetVisibilityAction({ visibility: VisibilityFilters.SHOW_COMPLETED}))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkComponent)

export default FilterLink