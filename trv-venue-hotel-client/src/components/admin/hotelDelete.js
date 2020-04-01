import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import history from '../../history';
import ButtonCustom  from '../button/button'
import { fetchStream, deleteStream } from '../../redux/actions';

class HotelDelete extends React.Component {
  componentDidMount() {
   
    this.props.fetchStream(this.props.match.params.id);

  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
      <ButtonCustom  
       title="Delete" onClick={() => this.props.deleteStream(id)} 
       addClass="relative">
       Delete
       </ButtonCustom>
       <ButtonCustom  
       title="Delete" onClick={() => this.props.deleteStream(id)} 
       inverted
       addClass="relative">
       Cancel
       </ButtonCustom>
      
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.hotel) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with hotel named: ${
      this.props.hotel.name
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Hotel"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  return { hotel: state.hotels[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(HotelDelete);
