import React from 'react'
import Car from './Car'
import Apple from './Apple';
import Gun from './Gun'


function Garage(){
    // const brand ='ford';
    // const color ='Black';
    const isDoorOpen = true;

    const carInfo = {
        brand : 'ford',
        color : 'Black'
    }
    const appleInfo={
        type:'Fugi',
        color:'red'
    }
    const carList =[
        {
            brand : 'BMW',
            color : 'Black'
        },
        {
            brand : 'Ferrari',
            color : 'Red'
        },
        {
            brand : 'Tesla',
            color : 'White'
        }

    ]
    const numberList =[
        1,2,3,4,5
    ];
    const showCase =carInfo.brand !== undefined && carInfo.color !== undefined ? <Car carInfo={carInfo} /> : null;
    return (
      <div>
      <h2>Who lives inside the my garabe</h2>
      {/* <Car brand={brand} color={color}/> */}
      {
        showCase? <Car carInfo={carInfo} /> : null
      }
      {/* <Car carInfo={carInfo} /> */}
      <Apple appleInfo={appleInfo}/>
      <Gun/>
      {isDoorOpen?<h2>Garage door is open</h2>:<h2>Garage door is close</h2>}
      <ul>
        {carList.map((carInfo)=><li key={carInfo.brand}><Car carInfo={carInfo}/></li>)}
      </ul>
      <ul>
        {numberList.map((e,index)=><p key={index}>{e}</p>)}
      </ul>

      </div>
      
    );
  }

export default Garage