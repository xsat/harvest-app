import React from "react";
import Grid from "./grid";
import Action from "./action";
import Energy from "./energy";

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid width={5} height={7} handler={(row, column)=> {
                    console.log('Item', row, column);
                }}/>
                <div>
                    <Action title="Attack" cost={2} handler={()=> {
                        console.log('Attack');
                    }}/>
                    <Action title="Move" cost={1}  handler={()=> {
                        console.log('Move');
                    }}/>
                    <Action title="Finish" handler={()=> {
                        console.log('Finish');
                    }}/>
                </div>
                <Energy available={1} total={10} />
            </React.Fragment>
        );
    }
}