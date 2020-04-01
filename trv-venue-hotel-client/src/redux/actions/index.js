
import streams from '../../apis/hotels';
import history from '../../history';
import { uuid } from 'uuidv4';
import {
  CREATE_HOTEL,
  FETCH_HOTELS,
  FETCH_HOTEL,
  DELETE_HOTEL,
  EDIT_HOTEL,
  SORT_HOTELS,
  BOOK_ROOM,
  FILTER_HOTELS
} from './types';



export const createStream = formValues => async (dispatch) => {
  let id=uuid()
 
  formValues.rooms.map((room,index) => {
    let roomId=uuid()
    formValues.rooms[index]["id"]=roomId

  })

  const response = await streams.post('/hotels', {id, ...formValues });

  dispatch({ type: CREATE_HOTEL, payload: response.data });
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/hotels');

  dispatch({ type: FETCH_HOTELS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
 
  const response = await streams.get(`/hotels/${id}`);

  dispatch({ type: FETCH_HOTEL, payload: response.data });
};



export const deleteStream = id => async dispatch => {
  debugger
  console.log(id)
  await streams.delete(`/hotels/${id}`);

  dispatch({ type: DELETE_HOTEL, payload: id });
  history.push('/');
};

export const confirmBooking = booking => async dispatch => {
  const response = await streams.get(`/hotels/${booking.hotel}`);
 let roomselected={}
 response.data.rooms.map(room => {
if(room.id===booking.roomId){
   
  roomselected=room
}

 })

 
const bookings={
  confirmationId:booking.confirmId,
  hotelName:response.data.name,
  distanceToEvent:response.data.distance_to_venue,
  image:response.data.images[0],
  roomName:roomselected.name,
  roomMaxOccupancy:roomselected.max_occupancy,
  price:roomselected.price_in_usd
}

  dispatch({ type: BOOK_ROOM, payload: bookings });
  history.push(`/book/${booking.confirmId}`);
};

export const sort = item => async dispatch => {

  dispatch({ type: SORT_HOTELS, payload: item });
  
};

export const filter = filterBy => async dispatch => {

  dispatch({ type: FILTER_HOTELS, payload: filterBy });
  
};