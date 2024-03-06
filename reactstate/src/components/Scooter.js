import React from 'react'
import { useState } from 'react';

function Scooter(){
    // const [color,setColor]=useState("Red")
    // const [brand,setBrand]=useState("Honda")
    // const [model,setModel]=useState("Activa")
    // const [year,setYear]=useState("2024")
    const [scooter,setScooter]= useState({
        color:"Red",
        brand:"Honda",
        model:"Activa",
        year:"2024"

    })

    function updateColor(){
        setScooter((previousState)=>{
            return {...previousState,color:"Blue"}
        })
    }

    console.log('Current State',scooter)

    return(
        <>
            <h1>Scooter</h1>
            <p>Color : {scooter.color}</p>
            <p>Brand:{scooter.brand}</p>
            <p>Model:{scooter.model}</p>
            <p>Year:{scooter.year}</p>
            <button onClick={updateColor}   >Change Color</button>
        </>
    )
}

export default Scooter