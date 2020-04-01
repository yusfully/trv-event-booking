
import React from 'react';
import _ from 'lodash';
import {ReactComponent as Fitness} from '../../icons/fitness.svg'
import {ReactComponent as Spa} from '../../icons/spa.svg'
import {ReactComponent as Pool} from '../../icons/pool.svg'
import {ReactComponent as Pet} from '../../icons/pet.svg'
import {ReactComponent as Restaurant} from '../../icons/restaurant.svg'
import {ReactComponent as Wifi} from '../../icons/wifi.svg'
import {ReactComponent as Park} from '../../icons/park.svg'

const Amenities =({classAdd,amenities})=>{
return(

<ul className={`amenities-list ${classAdd}`}>
{
  amenities.map((amenity,index) => {
  return (
    <li key={index}>
    
   {
     amenity==="gym" ? <Fitness/> :
     amenity==="free_wifi" ? <Wifi/> :
     amenity==="restaurant" ? <Restaurant/> :
     amenity==="spa" ? <Spa/> :
     amenity==="pets" ? <Pet/> :

     amenity==="pool" ? <Pool/> :
     amenity==="free_parking" && <Park/> 
  }
    
      <p>         
      { _.startCase(amenity) }
      </p>

   
    </li>
  )
  })
}

</ul>
)
}

export default Amenities