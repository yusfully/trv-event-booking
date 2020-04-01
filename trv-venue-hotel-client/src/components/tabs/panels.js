import React from 'react'

class Panel extends React.Component{
   
    render(){
       
      return <div  className="tab-content">{this.props.children}</div>
    }
  }
 
export default  Panel