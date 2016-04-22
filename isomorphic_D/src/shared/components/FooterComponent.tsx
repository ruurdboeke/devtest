/// <reference path="../../../typings/main.d.ts" />

import React from 'react'
import FilterLink from '../components/FilterLinkContainer'

interface IFooterProps {
    onClick: any,
    children: any,
    active: boolean
}

export default class FooterComponent extends React.Component<IFooterProps, any> {
    render() {
        return (
            <p>
                Show:
                {" "}
                <FilterLink filter="SHOW_ALL">
                    All
                </FilterLink>
                {", "}
                <FilterLink filter="SHOW_ACTIVE">
                    Active
                </FilterLink>
                {", "}
                <FilterLink filter="SHOW_COMPLETED">
                    Completed
                </FilterLink>
            </p>
        );
    }
}