import React from 'react';
import FilterItem from './filterItem'


const FilterList=(title,filters,filterBy,increase,type,label)=>{
console.log(filters)


    return(
        <div className="filter">
        <div className="filter-item">
        <h3 className="filter-title">{title}</h3>
        <div className="filter-label">{label}</div>

        

        </div>
        </div>
    )

}

export default FilterList