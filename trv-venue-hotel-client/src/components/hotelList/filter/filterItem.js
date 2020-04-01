import React from 'react';



const FilterItem=(title,filters,filterBy)=>{

    return(
        <div className="filter">
        <div className="filter-item">
        <h3 className="filter-title">{title}</h3>
        <FilterItem filter={filters} filterBy={filterBy}/>
        </div>
        </div>
    )

}

export default FilterItem