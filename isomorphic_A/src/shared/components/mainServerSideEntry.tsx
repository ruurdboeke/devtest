/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

interface MyProps {}
interface MyState {}

class AppView extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div id="app-view">
        <h1>Todos</h1>asdf
        <hr />
        {this.props.children}
      </div>
    );
  }
}

module.exports = AppView;