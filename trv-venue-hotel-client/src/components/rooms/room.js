
import React from 'react';
import _ from 'lodash';
import ButtonCustom from '../button//button'
import {withRouter} from 'react-router-dom';
import { uuid } from 'uuidv4';


const Room =({confirm,roomprop,history})=>{

  const {id,name,description,max_occupancy,price_in_usd}=roomprop


     
  return (
    <li>
    <div class="rooms-firstcol">
    <h4>
{name}</h4>
{description}
    </div>
    <div class="rooms-secondcol">
{max_occupancy}
    </div>
    <div class="rooms-lastcol">
$ {price_in_usd}
    </div>
    <div class="detail-book">
    <ButtonCustom  
        addClass="relative"
        arrow={true} 
        onClick={()=>
          {
           
           let uid=uuid()
            confirm(id,uid)
           }
          }>Book now</ButtonCustom>
    </div>
   
    </li>

        
  
)

}

export default withRouter(Room)