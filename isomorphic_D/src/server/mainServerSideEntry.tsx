/// <reference path="../../typings/main.d.ts" />

import * as React from 'react';


export default class AppView extends React.Component<any, any> {
    static propTypes = {
        children: React.PropTypes.node
    };

  render() {
    return (
        <div className="page">appview is here <input></input>
            <div className="page--grow">{this.props.children}</div>
        </div>
    );
  }
}
