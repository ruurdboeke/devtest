/// <reference path="../../../typings/main.d.ts" />
import React from 'react'

interface ILinkProps {
    onClick: any,           
    children: any,          // ? is this implicit?
    active: boolean
}

export default class LinkComponent extends React.Component<ILinkProps, any> {
    render() {
        if (this.props.active) {
            return <span>{this.props.children}</span>
        }
        else {
            return (
                <a href="#"
                    onClick={e => {
                        e.preventDefault()
                        this.props.onClick()
                    } }
                    >
                    {this.props.children}
                </a>);
        }
    }
}