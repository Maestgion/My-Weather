import React from 'react'
import Search from '../components/search/Search'

const Main = () => {
  
  const handleOnSearchChange = (searchData)=>
  {
    console.log(searchData) 
  } 

  return (
    <>
        <div className='h-[100vh] flex flex-col items-center py-20 font-Roboto bg-[#3ddceb1f] '>
            <Search onSearchChange={handleOnSearchChange}/>
        </div>
    </>
  )
}

export default Main