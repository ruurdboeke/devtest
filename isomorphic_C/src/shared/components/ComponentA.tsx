/// <reference path="../../../typings/main.d.ts" />

import React from 'react';
var Link = require('react-router').Link;

/**
 *
 * @extends React.Component
 */
export default class ComponentA extends React.Component<any, any> {
    /**
     * Render the component
     *
     * @returns {JSX.Element} the JSX Rendering of this component
     * @overrides React.Component#render
     */
    render() {
        return (
            <div className="page--home">
                <h1>A</h1>
                <Link to="/ComponentB">PageB</Link>
            </div>
        );
    }
}
