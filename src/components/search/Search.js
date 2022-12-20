import React from 'react'
import {AsyncPaginate} from "react-select-async-paginate"
import { useState } from 'react';

const Search = ({onSearchChange}) => {
  
  const [search, setSearch] = useState(null);

  const handleOnChange=(searchData)=>{
    setSearch(searchData);
    onSearchChange(searchData);
  }

  const loadOptions = (searchData)=>{
    
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