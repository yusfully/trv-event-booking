import React from 'react';
import './button.css'

const CheckBoxCustom =({handleChange, label, ...otherProps})=>{
    const input = useRef();
    useEffect(() => {
       
        
        
    }, [])
    return(
    <div className="group">
    <input ref={input} type="checkbox" className={`${addClass ? addClass : ''} custom-button`} {...otherProps}>
    {children}}
    </input>
    {
        label ?
        (<label className={`${
            otherProps.value.length ? 'shrink' : 'sdf'
             }  form-input-label`}>
        {label}
        </label>
        )
        : null
    }
    </div>
    )
}

export default CheckBoxCustom