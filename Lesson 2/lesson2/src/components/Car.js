import React from 'react'

function Car(props){
    // const {brand , color} = props
    const {carInfo} = props
    const {brand , color} = carInfo
    

    
    const text =`my car is ${brand} and my car  color is ${color}`
    return (
      <h2>{text}</h2>
    );
  }

export default Car