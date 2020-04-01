import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import hotelsReducer from './hotels.reducer';
import bookReducer from './bookReducer';

const rootReducer= combineReducers({
  auth: authReducer,
  form: formReducer,
  hotels: hotelsReducer,
  booking:bookReducer
});

export default rootReducer