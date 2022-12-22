import React from 'react'
import {AsyncPaginate} from "react-select-async-paginate"
import { useState } from 'react';
import {geoApiOptions, geo_api_url} from "../../Api/api"

const Search = ({onSearchChange}) => {
  
  const [search, setSearch] = useState(null);

  
  const loadOptions = (inputValue)=>{
    
    return  fetch(`${geo_api_url}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
    .then((response) => response.json())
    .then((response) => {
      return {
        options: response.data.map((city)=>{
          return{
            value : `${city.latitude} ${city.longitude}`  ,
            label : `${city.name}, ${city.countryCode}`,
          }
        })
      }
    })
    .catch((err) => console.error(err));
    
  }
  
  const handleOnChange=(searchData)=>{
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <>
        <AsyncPaginate
            placeholder="Search for a city..."
            debounceTimeout={500}
            value={search}
            onChange={handleOnChange}
            loadOptions = {loadOptions}


        />
    </>
  )
}

export default Search