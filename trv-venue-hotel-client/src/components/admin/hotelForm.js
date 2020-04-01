import React from 'react';
import { Field,FieldArray, reduxForm } from 'redux-form';
import Select  from '../select/select'
import ButtonCustom from "../button/button"
import validate from './hotelFormValidate'
import  './hotelForm.css'

class HotelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  
  handleFieldChange=(fieldId, value)=> {

    this.setState({ [fieldId]: value });
 
  }

  

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta,fieldType,inputType}) => {
  
    const className = `field ${meta.error && meta.touched ? 'error' : ''} ${meta.active ? 'focused' : ''}`;
    return (
      <div className={className}>
        <label className="label">{label}</label>
     
         {
          
            fieldType=== "textarea" ?  <textarea {...input} autoComplete="off" />
            :  <input {...input} type={inputType} autoComplete="off" />
           
          
        }
         <span className="border"></span>
        {this.renderError(meta)}

      </div>
    );
  };

 renderHotel = ({ fields, meta: { touched, error } }) => {
if(fields.length===0) fields.push({})
 return (
  
    <ul>
    <li>
  
    {
      
      
      touched && error && <span>{error}</span>
    }
  </li>
      {fields.map((hotel, index) =>

        <li key={index}>
       


          <Field
            name={`${hotel}.name`}
            type="text"
            component={this.renderInput}
            label="Hotel name"/>

          <Field
            name={`${hotel}.description`}
            type="text"
            component={this.renderInput}
            label="Hotel Description"
            fieldType="textarea"/>

                <Field
            name={`${hotel}.distance_to_venue`}
            type="number"
            inputType="number"
            component={this.renderInput}
            label="Distance to venue from hotel"
            />

            <Field
            name={`${hotel}.rating`}
            type="number"
            inputType="number"
            component={this.renderInput}
            label="Hotel rating"/>

            <div className="two-col">
            <div className="two-col-inner">
              <Select
              id="amenities"
              label="Amenities"
              onSelect={this.handleFieldChange}
              placeholder="Pick amenities"
              options={[
                { value: 'Free Wifi' },
                { value: 'Pets' },
                 { value: 'Free parking' },
                { value: 'Spa' },
                 { value: 'Gym' },
                { value: 'Restaurant' },
                { value: 'Pool' }
              ]}
              multiple
            />
            </div>
            <div className="two-col-inner">
            <Select
            id="price_category"
            label="Price category"
            onSelect={this.handleFieldChange}
            placeholder="Select price category"
            options={[
              { value: 'Low' },
              { value: 'Medium' },
               { value: 'High' },
              { value: 'Very high' }
            ]}
            
          />
          </div>
          </div>
          <div className="form-room-container">
          <FieldArray name={`${hotel}.rooms`} component={this.renderRooms}/>
          </div>
        </li>
      )}
    </ul>
  )
      }

 
  renderRooms = ({ fields, meta: { error } }) => {
    if(fields.length===0) fields.push({})
   return  (
    <ul>
    
      
      {fields.map((room, index) =>
       
        <li  className="relative" key={index}>
         <h3>{`Room${index + 1}`} </h3>

      { fields.length>=2 && <ButtonCustom   title="Remove" onClick={() => fields.remove(index)} inverted addClass="absolute small">Remove</ButtonCustom>
      
       }
            <Field
            name={`${room}.name`}
            type="text"
            component={this.renderInput}
            label={`Name`}/>

            <Field
            name={`${room}.description`}
            type="text"
            component={this.renderInput}
            label={`Description`}/>

            <Field 
            name={`${room}.max_occupancy`}
            component={this.renderInput} 
            inputType="number"
            label="Maximum occupancy"
            />
            <Field 
            name={`${room}.price_in_usd`}
            component={this.renderInput} 
            label="Enter room price" 
            inputType="number"
            />

        </li>
      )}
      {error && <li className="error">{error}</li>}
      <li className="addroom-button-container">
      <ButtonCustom  
      addClass="relative"
      arrow={true} 
      inverted
      type="button"
      onClick={

          (e) => {
            e.preventDefault();
            fields.push()
          }
         
        }>Add Room</ButtonCustom>
      
    </li>
    </ul>
  )
      }
  onSubmit = formValues => {

    Object.keys(this.state).map((key)=>{
      formValues.hotel[0][key]=this.state[key]
    })

    this.props.onSubmit(formValues);
  };
  

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="form hotel admin">
      <FieldArray name="hotel" component={this.renderHotel}/>
      <ButtonCustom  
      addClass="relative"
      arrow={true} 
     >Create hotel</ButtonCustom>
     

      </form>
    );
  }
}



export default reduxForm({
  form: 'hotelForm',
  validate
})(HotelForm);
