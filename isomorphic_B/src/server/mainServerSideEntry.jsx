/// <reference path="../../typings/main.d.ts" />
import * as React from 'react';
export default class AppView extends React.Component {
    render() {
        return (<div className="page">appview is here <input></input>
            <div className="page--grow">{this.props.children}</div>
        </div>);
    }
}
AppView.propTypes = {
    children: React.PropTypes.node
};
//# sourceMappingURL=mainServerSideEntry.jsx.map