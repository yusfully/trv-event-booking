import _ from 'lodash';
import {
    BOOK_ROOM
} from '../actions/types';


export default (state = {}, action) => {
   
  switch (action.type) {
 
      case BOOK_ROOM:
        return {
          ...state,
          confirmationId:action.payload.confirmationId,
          hotelName:action.payload.hotelName,
          distanceToEvent:action.payload.distanceToEvent,
          image:action.payload.image,
          roomName:action.payload.roomName,
          roomMaxOccupancy:action.payload.roomMaxOccupancy,
          price:action.payload.price,
      }
      
       
      
    default:
      return state;
  }
};
