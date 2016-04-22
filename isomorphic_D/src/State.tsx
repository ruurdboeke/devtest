import { VisibilityFilters } from './shared/actions/actions'
import Todo from './Todo'

export default class State {
  constructor(
    public visibilityFilter : VisibilityFilters = VisibilityFilters.SHOW_ALL,
    public todos: Todo[] = [] ){}
}