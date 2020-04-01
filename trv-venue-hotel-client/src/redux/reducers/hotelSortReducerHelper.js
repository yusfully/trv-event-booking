
import _ from 'lodash';


 export const addLowPrice = (hotels,id)=>{

      for (const lowPrice in hotels) {
        hotels[lowPrice]["lowest"]={}
        hotels[lowPrice]["lowest"]=hotels[lowPrice].rooms[0].price_in_usd
        
      }
  return(
  _.mapKeys(hotels, id)

   
      )
    }


    export const filterhotels = (hotels,filterBy)=>{

      
      }