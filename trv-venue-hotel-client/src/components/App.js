import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HotelCreate from './admin/hotelCreate';
import HotelDelete from './admin/hotelDelete';
import HotelList from './hotelList/hotelList';
import HotelDetail from './hotelDetail/hotelDetail';
import Confirmation from './confirmation/confirmation';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        
          <Header />
          <Switch>
            <Route  key="client" path="/" exact component={HotelList} />
            <Route  key="admin" path="/admin/" exact component={HotelList} />
            <Route path="/hotels/new" exact component={HotelCreate} />
            <Route path="/book/:id" exact component={Confirmation} />
            <Route path="/hotel/delete/:id"  component={HotelDelete} />
            <Route path="/hotels/:id" exact component={HotelDetail} />
          </Switch>
       
      </Router>
    </div>
  );
};

export default App;
