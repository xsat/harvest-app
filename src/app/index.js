import React from "react";
import Grid from "./grid";
import Action from "./action";

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Hi</h1>
                <Grid width={5} height={7} handler={(row, column)=> {
                    console.log('Item', row, column);
                }}/>
                <div>
                    <Action title="Attack" handler={()=> {
                        console.log('Attack');
                    }}/>
                    <Action title="Move" handler={()=> {
                        console.log('Move');
                    }}/>
                </div>
            </React.Fragment>
        );
    }
}