/// <reference path="../../../typings/main.d.ts" />

import React from 'react'
import FilterLinkContainer from '../containers/FilterLinkContainer'
import { VisibilityFilters } from '../actions/actions'

export default class FooterComponent extends React.Component<any, any> {
    render() {
        return (
            <p>
                Show:
                <FilterLinkContainer filter={VisibilityFilters.SHOW_ALL}>
                    All
                </FilterLinkContainer>, <FilterLinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>
                    Active
                </FilterLinkContainer>, <FilterLinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>
                    Completed
                </FilterLinkContainer>
            </p>
        );
    }
}