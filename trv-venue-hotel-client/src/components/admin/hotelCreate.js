import React from 'react';
import { connect } from 'react-redux';
import { createHotel } from '../../redux/actions';
import Hotelform from './hotelForm';

class HotelCreate extends React.Component {

  onSubmit = (formValues) => {

  
formValues.hotel[0]["images"]=[ 
  "/assets/14460476.webp",
  "/assets/24313176.webp",
  "/assets/41720962.webp",
  "/assets/243759900.jpg",
  "/assets/221046170.webp",
  "/assets/331912020.webp"
]
console.log(formValues)
    this.props.createHotel(formValues.hotel[0]);
  };


  render() {
    return (
      <div className="form-container">
        <h3>Create a hotel</h3>
        <Hotelform onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createHotel }
)(HotelCreate);
