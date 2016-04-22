import { VisibilityFilters, AddAction, SetVisibilityAction, CompleteAction, isType, Action } from './../actions/actions'
import { createAddAction, createCompleteAction, createSetVisibilityAction } from './../actions/actions'
import todoAppReducer from './reducers';

var { createStore} = require ('redux');

const store = createStore(todoAppReducer);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(createAddAction({ text: 'jup'}))
store.dispatch(createAddAction({ text: 'Learn about reducers'}))
store.dispatch(createAddAction({ text: 'Learn about store'}))
store.dispatch(createCompleteAction({ completed: true, id: 0}))
store.dispatch(createCompleteAction({ completed: true, id: 1}))
store.dispatch(createSetVisibilityAction({visibility: VisibilityFilters.SHOW_COMPLETED}))

// Stop listening to state updates
unsubscribe()
