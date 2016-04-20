import Immutable from 'immutable';

var defaultState = Immutable.List<{}>();

export default function emptyReducer(state = defaultState, action : any) {
      return state;
}
