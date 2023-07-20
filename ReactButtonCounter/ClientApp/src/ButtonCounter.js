import React, { Component } from 'react';


export class ButtonCounter extends Component {

    state = { currentCount: 0 }

    onClick = () => {        
        const currNum = this.state.currentCount;       
        this.setState({
            currentCount: currNum + 1
        });
    }

    render() {
        return (
            <div class='padding'>
                <h1>Button Counter</h1>               
                <h6> Click on the button below to increment the number</h6>                
                <div>
                    <button className="btn btn-primary" onClick={this.onClick}> Click Me</button>
                    <span className="padding"> Current Count: <span class="bold">{this.state.currentCount}</span> </span>
                </div>

            </div>
        )
    }
}