import React from "react";

export default class Action extends React.Component {
    constructor(props) {
        super(props);
        this.handler = props.handler ?? (() => {
        });
    }

    render() {
        const title = this.props.title ?? '';
        const cost = this.props.cost ?? 0;

        return (
            <button onClick={() => {
                this.handler();
            }}>{title}{cost > 0 ?  ` (${cost})` : null}</button>
        );
    }
}