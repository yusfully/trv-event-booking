import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'

 

const Header = ({auth}) => {
console.log(auth)
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="nav">
        Hotels
      </Link>
      <Link to="/admin" className="nav">
      Admin
    </Link>
      <div className="right menu">
        
      {auth.isSignedIn}
      
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { 
    auth:state.auth
  
  };
};
export default connect(
  mapStateToProps
)(Header);
