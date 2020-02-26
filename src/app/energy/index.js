import React from "react";

export default class Energy extends React.Component {
    render() {
        const available = this.props.available ?? 0;
        const total = this.props.total ?? 0;

        return (
            <div>Energy: {available}/{total}</div>
        );
    }
}