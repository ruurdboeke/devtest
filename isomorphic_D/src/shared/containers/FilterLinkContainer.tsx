/// <reference path="../../../typings/main.d.ts" />

var { connect } = require ('react-redux');
import { createSetVisibilityAction, VisibilityFilters } from './../actions/actions'
import LinkComponent from '../components/LinkComponent'
import State from './../../State'

// no value in this interface, it doesn't get picked up or enforced
interface IFilterLinkProps
{
  filter : VisibilityFilters
}

const mapStateToProps = (state : State , ownProps : IFilterLinkProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch : any, ownProps : IFilterLinkProps) => {
  return {
    onClick: () => {
      dispatch(createSetVisibilityAction({ visibility: ownProps.filter}))
    }
  }
}

const FilterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkComponent)

export default FilterLinkContainer