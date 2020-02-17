import React from "react";

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            available: [],
            active: [],
            ownUnits: [],
            enemyUnits: []
        };
        this.handler = props.handler ?? (() => {
        });
    }

    render() {
        const height = this.props.height ?? 0;
        const width = this.props.width ?? 0;
        return this.generateItems(height).map((row) => {
            const columns = this.generateItems(width).map((column) => {
                return (
                    <div key={column}
                         className={this.isActive(row, column) ? "column active" : "column"}
                         onMouseEnter={() => {
                             this.setState({
                                 active: this.generateActive(row, column)
                             });
                         }}
                         onMouseLeave={() => {
                             this.setState({
                                 active: []
                             });
                         }}
                         onClick={() => {
                             this.handler(row, column)
                         }}>{row}:{column}</div>
                );
            });

            return (
                <div key={row} className="row">
                    {columns}
                </div>
            );
        });
    }

    generateItems(count) {
        return [...Array(count).keys()];
    }

    generateActive(row, column) {
        const height = this.props.height ?? 0;
        const width = this.props.width ?? 0;

        let active = [];

        if (row - 1 >= 0) {
            if (column - 1 >= 0) {
                active.push(this.generateId(row - 1, column - 1));
            }

            active.push(this.generateId(row - 1, column));

            if (column + 1 < width) {
                active.push(this.generateId(row - 1, column + 1));
            }
        }

        if (column - 1 >= 0) {
            active.push(this.generateId(row, column - 1));
        }

        active.push(this.generateId(row, column));

        if (column + 1 < width) {
            active.push(this.generateId(row, column + 1));
        }

        if (row + 1 < height) {
            if (column - 1 >= 0) {
                active.push(this.generateId(row + 1, column - 1));
            }

            active.push(this.generateId(row + 1, column));
            if (column + 1 < width) {
                active.push(this.generateId(row + 1, column + 1));
            }
        }

        return active;
    }

    isActive(row, column) {
        const id = this.generateId(row, column);

        return this.state.active.some((element) => element === id);
    }

    generateId(row, column) {
        return `${row}:${column}`;
    }
}