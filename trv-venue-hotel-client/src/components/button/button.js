import React from 'react';
import './button.css'

const ButtonCustom =({addClass,arrow,children, isGoogleSignIn, inverted, ...otherProps})=>{
    
    return(
    <button className={`${inverted ? 'inverted' : ''} ${addClass ? addClass : ''} custom-button`} {...otherProps}>
    {children} {arrow && <span className="long-arrow-right"></span> }
    </button>
    )
}

export default ButtonCustom