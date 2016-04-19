/// <reference path="../../../typings/main.d.ts" />

import * as React from 'react';

class AppView extends React.Component<any, any> {
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