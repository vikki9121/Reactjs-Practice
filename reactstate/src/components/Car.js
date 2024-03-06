import React from 'react';

class Car extends React.Component {

    constructor() {
        super();
        this.state = {
            color: "Red",
            model: "Ford"
        };
    }

    changeColor = () => {
        this.setState((prevState) => {
            return { ...prevState, color: "Blue" };
        });
    };

    render() {
        return (
            <div>
                <h1>My Car color is {this.state.color} and model is {this.state.model}</h1>
                <button onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

export default Car;
 