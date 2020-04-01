import React from 'react';
import { connect } from 'react-redux';
import { fetchHotel } from '../../redux/actions';

import Amenities from '../amnenities/amenities';
import Rooms from "../rooms/rooms"
import distanceIcon from '../../icons/distanceIcon.svg'
import './hotelDetail.css'

class HotelDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchHotel(id);
   
  }
   renderDistance=(distance)=> {
    if(distance>1000){
      return distance/1000+ "km"
    }else{
      return distance + "m"
      
    }
  }
  componentDidUpdate() {
   
  }

 changePicture=()=>{

 }


  render() {
    if (!this.props.hotel) {
      return <div>Loading...</div>;
    }

    const { name, description,images,rating,distance_to_venue,amenities,rooms,id } = this.props.hotel;

    return (
      <div className="details-wrapper">
      <div className="detail-header">
     
      <h1>{name}</h1>
       {
        <div className="distance"><i className="distance-icon"><img src={distanceIcon}/></i>{
          this.renderDistance(distance_to_venue)+ " to the Conferance hall"
        }</div>
       }
       <p className="detail-rating">{rating}</p>
       </div>


       <div className="details-main">

        <div className="detail-left">

       <img src={images[0]}/>
       <ul className="thumbs">
       {
        images.map((imgSrc,index) => {
          
          return (
            <li key={index} onClick={()=>this.changePicture}>
            <img src={imgSrc}/>
            </li>
          )
       })
      }
       </ul>
       
       <h5>{description}</h5>

      
      </div>
       <div className="details-right">
       <h2 className="sub-title">Amenities</h2>
        <Amenities  classAdd={"amenities-indetails"} amenities={amenities}/>
       </div>
      </div>
      <div className="rooms">
      <Rooms hotel={id} rooms={rooms}/>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { hotel: state.hotels[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchHotel }
)(HotelDetail);
