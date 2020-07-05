import React, { Component } from 'react'

export default class child extends Component {
    constructor(props){
        super(props);
        this.message = props.message;
    }

    render() {
        const {message} = this.props;
        return (
            <div>
                <h1>这是一个类组件;message:{message}</h1>
            </div>
        )
    }
}
