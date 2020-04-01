import React from 'react'

class Tabs extends React.Component{
   state = {
        selected:this.props.selected || 0
      
    }
    render(){
      return (<div>
        <ul className="inline">
          {this.props.children.map((elem,index)=>{
            let style = index == this.state.selected ? 'selected': '';
           return <li className={style} key={index} onClick={this.handleChange.bind(this,index)}>{elem.props.title}</li>
          })}
        </ul>
        <div className="tab">{this.props.children[this.state.selected]}</div>
        </div>
      )
    }
      handleChange(index){
        this.setState({selected:index})
            this.props.size(false)
      }
  }
  
export default Tabs