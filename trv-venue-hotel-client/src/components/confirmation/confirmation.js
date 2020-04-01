import React from 'react';
import { connect } from 'react-redux';
import ButtonCustom  from '../button/button'
import './confirmation.css'


class Confirmation extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { id } = this.props.match.params;

    console.log(id)

    
   
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



  render() {
    if (!this.props.booking) {
      return <div>Loading...</div>;
    }
const{confirmationId,hotelName,distanceToEvent,image,roomName,roomMaxOccupancy,price}=this.props.booking
const{isSignedIn}=this.props.auth

    return (
      <div className="confirm-wrapper">
     <h2 className="confirmation sub-title">Hotel Information</h2>
     <div className="confirmation-flex-wrapper">
<div className="confirmation-image">
<img src={image}/></div>
     <div className="confirmation-container">
  
<div className="hotel-information">
     <p>Hotel Name</p>
     <h3>{hotelName}</h3>
     <p>Room Type</p>
     <h3>{roomName}</h3>
     <p>Maximum occupancy</p>
     <h3>{roomMaxOccupancy}</h3>
<p>Distance to event</p>
     <h3>{distanceToEvent} meter</h3>
     <p>Price</p>
     <h3 className="price">{price} $</h3></div>
     </div>
     </div>
    <div></div>
     <div className="booking-information">
     <h2 className="confirmation sub-title">Booking Information Information</h2>
     <div className="booking-information-inner">
     <div>
     <span className="confirm-title">
     Customer Name
     </span>
     <h3 className="occupancyName">{isSignedIn}</h3>
     </div>
     <div>     
     

     <p>Confirmation Number</p>
     <h3>{confirmationId}</h3>
     </div>
     <div>
     <p>Check in</p>
     <h3>20 Fecruary 2020</h3>
     </div>
     <div>
     <p>Check out</p>
     <h3>22 Fecruary 2020</h3>
     </div>
     <div>
     <p> Total length of stay</p>
    <h3>1 night</h3>
    </div>
    </div>
    </div>
    <ButtonCustom inverted addClass="absolute">Confirm</ButtonCustom>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    booking: state.booking,
    auth:state.auth
  
  };
};

export default connect(
  mapStateToProps
  
)(Confirmation);
