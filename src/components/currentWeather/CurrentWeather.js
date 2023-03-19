import React from 'react'

const CurrentWeather = ({data}) => {

  const icon = require(`../../Assets/Icons/${data.weather[0].icon}.png`);
  
  return (
    <>
       <div className='grid grid-cols-2 p-8 w-[34vw] rounded-lg bg-zinc-700 text-white gap-10 shadow-xl'>

          <div className='flex flex-col justify-between'>
              <div className='leading-none'>
                <p className='font-bold text-3xl'>{data.city}</p>
                <p className='text-lg tracking-wider'>{data.weather[0].description}</p>
              </div>

            <div>
              <p className='text-8xl font-bold'>{Math.round(data.main.temp)}°C</p>
            </div>

          </div>

          <div className='flex flex-col justify-between leading-tight'>
            
            <div className='relative left-[5vw] bottom-[3vh] ' >
             
              <img src={icon} alt={data.weather[0].icon} width={100}   />
            
            </div>
            <div className='flex justify-between'>
              <div > 
                <p >Details</p>
                <p>Feels like</p>
                <p>Wind</p>
                <p>Humidity</p>
                <p>Pressure</p>
              </div>


              <div >
                <p className='invisible'>jjvhchgc</p>
                <p>{Math.round(data.main.feels_like)}°C</p>
                <p>{data.wind.speed} m/s</p>
                <p>{data.main.humidity}%</p>
                <p>{data.main.pressure} hPa</p>
                
              </div>

            </div>

          

          </div>



          

       </div>
    </>
  )
}

export default CurrentWeather