/// <reference path="../../../typings/main.d.ts" />
import React from 'react';
var Link = require('react-router').Link;
/**
 *
 * @extends React.Component
 */
export default class ComponentB extends React.Component {
    /**
     * Render the component
     *
     * @returns {JSX.Element} the JSX Rendering of this component
     * @overrides React.Component#render
     */
    render() {
        return (<div className="page--home">
                <h1>B</h1>
                <Link to="/components/ComponentA">PageA</Link>
            </div>);
    }
}
//# sourceMappingURL=ComponentB.jsx.map