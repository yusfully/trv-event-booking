import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHotels,sort,filter } from '../../redux/actions';
import HotelListItem from './hotelListItem'
import FilterMain from './filter/filterMain'
import ButtonCustom from '../button/button'
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import "./hotelList.css"

class HotelList extends React.Component {

  state = {
    hotels:null,
    sortType:null,
    isAdmin:false
  };
 

  componentDidMount() {
    this.props.fetchHotels();

   

   
  }  componentDidUpdate() {
    console.log(this.state)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.hotels !== this.props.hotels) {
      this.setState({
        hotels: nextProps.hotels,
         isAdmin: nextProps.match.url==="/admin"
      });
    }
  }
 
 
  
   priceCategory = {
    low:0,
    medium:1,
    high:2,
    very_high:3
    
  }
 
  sort(type){
    console.log(_.sortBy(this.state.hotels,  "rating"))
    
        if(this.state.sortType===type){
          return _.reverse(this.state.hotels)
           }else{
            this.setState({
            sortType:type
          })
         
     return _.sortBy(this.state.hotels,  type)
     }
   

   
    
    
  }
  renderList() {
   
    if(this.state.hotels)
    {
      
    return (
      this.state.hotels.map(hotel => {
     
      return (
        <div className="item" key={hotel.id}>
        <HotelListItem price={this.priceCategory[hotel.price_category]} hotel={hotel}/>
        </div>
      )
    })
    )}else{
      return (
        <div>loading</div>
      )
    }
  }

  renderCreate() {
   

    if (this.props.isSignedIn) {
      return (
       
        <div style={{ textAlign: 'right' }}>
          <Link to="/hotels/new" className="custom-button">
            Create a Hotel
          </Link>
        </div>
      );
    }
  }

  render() {
      
    return (
      <div className="container">
  
      
      <div className="container-inner">
        <h2>Where to stay</h2>
            <div className="filters">
      <ButtonCustom inverted onClick={()=>{
        this.setState({
          hotels:this.sort("rating")
        })
      }}>Sort by rating</ButtonCustom>

      <ButtonCustom inverted onClick={()=>{
        this.setState({
          hotels:this.sort("distance_to_venue")
        })
        
       
       
      }}>Sort by distance</ButtonCustom>

      <ButtonCustom inverted onClick={()=>{
        this.setState({
          hotels:this.sort("lowest")
        })
      }}>Sort by price</ButtonCustom>
      </div>
        <div className="ui celled list">
        <FilterMain/>
        {this.renderList()}</div>
        {this.state.isAdmin && this.renderCreate()}
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotels: Object.values(state.hotels),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};


export default withRouter(connect(
  mapStateToProps,
  {fetchHotels,filter },
)(HotelList))
