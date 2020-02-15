import React from "react";

export default class Action extends React.Component {
    constructor(props) {
        super(props);
        this.handler = props.handler ?? (() => {
        });
    }

    render() {
        const title = this.props.title ?? '';

        return (
            <button onClick={() => {
                this.handler();
            }}>{title}</button>
        );
    }
}