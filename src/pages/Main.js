import React from 'react'
import CurrentWeather from '../components/currentWeather/CurrentWeather'
import Search from '../components/search/Search'


const Main = () => {
  
  const handleOnSearchChange = (searchData)=>
  {
    console.log(searchData) 
  } 

  return (
    <>
        <div className='h-[100vh] flex flex-col items-center py-10 font-Roboto bg-[#3ddceb1f] gap-10'>

          {/* search widget */}

           <div className='w-8/12'>
           <Search onSearchChange={handleOnSearchChange}/>
           </div>

           {/* current weather widget */}

           <div>
           <CurrentWeather/>
           </div>
        </div>
    </>
  )
}

export default Main