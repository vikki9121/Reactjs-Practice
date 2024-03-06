import React from "react";


class Apple extends React.Component{
    render(){
    const {appleInfo}=    this.props;
    const {type , color} = appleInfo
        return (
            <h2>my apple is {type} and my apple color is {color}</h2>
        );
    }


}
export default Apple