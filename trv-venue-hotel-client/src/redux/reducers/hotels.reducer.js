import _ from 'lodash';

import {
  FETCH_HOTEL,
  FETCH_HOTELS,
  CREATE_HOTEL,
  EDIT_HOTEL,
  DELETE_HOTEL,
  FILTER_HOTELS
} from '../actions/types';
import {sorthotels,addLowPrice,filterhotels} from './hotelSortReducerHelper';

const INITIAL_STATE= {
  categories:null,
  isFetching:false,
  errorMessage:undefined,

}
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HOTELS:
      return { ...state, ...addLowPrice(action.payload, 'id')  };
    case FETCH_HOTEL:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HOTEL:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HOTEL:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HOTEL:
      return _.omit(state, action.payload);
   
      case FILTER_HOTELS:
        return {
          ...state,
          filtered:filterhotels(state, action.payload)
      }
      
       
      
    default:
      return state;
  }
};
