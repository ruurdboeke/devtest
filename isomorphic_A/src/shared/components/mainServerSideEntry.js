/// <reference path="../../../typings/main.d.ts" />
"use strict";
const React = require('react');
class AppView extends React.Component {
    render() {
        return (React.createElement("div", {id: "app-view"}, React.createElement("h1", null, "Todos"), "asdf", React.createElement("hr", null), this.props.children));
    }
}
module.exports = AppView;
//# sourceMappingURL=mainServerSideEntry.js.map