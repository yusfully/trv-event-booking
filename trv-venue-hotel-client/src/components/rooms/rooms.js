
import React from 'react';
import _ from 'lodash';
import Room from './room'
import { connect } from 'react-redux';
import {confirmBooking} from '../../redux/actions'

const Rooms =({hotel,rooms,confirmBooking})=>{

const confirm=(roomId,confirmId)=>{
  confirmBooking({hotel,confirmId,roomId})
}

   
return(

<ul className="rooms-container">

<li className="rooms-grid-title">
<div className="rooms-firstcol">
<h5>Room type</h5>
</div>
<div className="rooms-secondcol">
<h5>Max. people</h5>
</div>
<div className="rooms-lastcol">
<h5>Price</h5>
</div>
<div className="detail-book"><h5>Book</h5></div>
</li>
{
  rooms.map(room => {
    
  return (
    <Room confirm={confirm} hotelname={hotel}  roomprop={room}/>
    
  )
  })
}

</ul>
)
}



export default connect(
  null,
  {confirmBooking},
)(Rooms);