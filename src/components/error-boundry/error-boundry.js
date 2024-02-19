import React, {Component} from "react";

import ErrorIndcitator from '../error-indicator/error-indicator';

export default class ErrorBoundry extends Component {
    state = {
        hasError: false
    };
    
    componentDidCatch() {
        this.setState({
            hasError: true
        })
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndcitator />
        }

        return this.props.children
    }
}