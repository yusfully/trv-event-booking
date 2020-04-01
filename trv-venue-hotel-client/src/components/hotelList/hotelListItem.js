
import React,{Fragment,useState,useEffect,useRef} from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import distanceIcon from '../../icons/distanceIcon.svg'
import ButtonCustom from '../button//button'
import Tabs from '../tabs/tabs'
import Panel from '../tabs/panels'
import Amenities from '../amnenities/amenities'

const HotelListItem=({hotel:{price_category,amenities,rating,distance_to_venue,rooms,id,images,description,name},price,history,...props})=>{
  console.log()
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const [isAdmin, setAdmin] = useState(false);

  let extendDom = useRef();
  let extendInner= useRef();
  useEffect(() => {
   if(props.match.url==="/admin") setAdmin(true)
    
  extendDom.current.style.height=extendInner.current.offsetHeight+'px'
   
}, [height])

  const renderPriceIcon=(num)=> {
    let priceIconarr=['$']
    for (var i = 0; i < num; i++) {
      priceIconarr.push('$')
  }


  
  return(
   <Fragment>
    {priceIconarr}
    </Fragment>
  )
  }

  const renderAdmin=(stream)=> {
   
    return (

      
      <div className="right floated content">
       
        <Link
          to={`/hotel/delete/${id}`}
          className="inverted custom-button"
        >
          Delete
        </Link>
      </div>
    );
  
} 
const renderClient=()=> {
 
    return (

      <Fragment>
      <div className="list-item-more-detail">

      <span onClick={()=>{
        
       renderExtend(true)
        
      }}>More</span>
      </div>
     <ButtonCustom  
      addClass="relative"
      arrow={true} 
      onClick={()=>
        {
         
        history.push(`/hotels/${id}`);
         }
        }>Choose Room</ButtonCustom>
        </Fragment>
    )
  
}

  const renderExtend=(main)=> {

if(main){
   setExpanded(!expanded)
}else{
 
  
  setExpanded(true)
}
   

   if(expanded){
  setHeight(extendInner.current.offsetHeight)

}
   

    
    
  
  }
  const renderDistance=(distance)=> {
    if(distance>1000){
      return distance/1000+ "km"
    }else{
      return distance + "m"
      
    }
  }
 return (
   
     
     
      <div className="content">
      <div className="list-item-inside">
      <div className="list-item-image-container">

      <img src={images[0]}/>
      </div>
     <div className="list-detail-container">
     <div className="list-item-detail-left">
        <Link to={`/streams/${id}`} className="list-item-title">
          {name}
        </Link>
       
        <div className="distance"><i className="distance-icon"><img src={distanceIcon}/></i>{
          renderDistance(distance_to_venue)+ " to the Conferance hall"
        }</div>
        
        { price_category && <div className={`price-category ${price_category}`}>{
          renderPriceIcon(price)
        }</div>
      }

       
        </div>
        <div className="list-item-detail-right">
         <div className="rating">{rating}</div>
         <div className="price">
        <span className="price-from">start from </span>
        <div className="price-low">{
          
          rooms[0].price_in_usd
          
        }</div></div>
        </div>
        </div>
        <div className={`list-actions ${isAdmin && 'admin'}`}>

        {

          isAdmin ? renderAdmin() : renderClient()
        }
      
          
          </div> </div>
          <div ref={extendDom} className={`expanded ${expanded ? '' : 'activeExtend'}` }>
    <div ref={extendInner} className="infoBox">
    <Tabs size={renderExtend} selected={1}>
    <Panel  title="Amenities">
    {amenities &&  <Amenities classAdd={"amenities-inlist"} amenities={amenities}/> }
   
   
    
    </Panel>
    <Panel  title="Info">
    <h3 className="sub-title">
    About {name}</h3>
    {description}</Panel>
    <Panel  title="Photos">
    <div className="img-wrapper">    {
      images.map((imgUrl,index) => {
      return (
        <figure className="img-tile">
        <img key={index} src={imgUrl}></img>
        </figure>
      )
      })
    }
    </div>

    </Panel>
  </Tabs>
    </div>
    </div>
          </div>
      
 
  );

 }
 export default withRouter(HotelListItem)
