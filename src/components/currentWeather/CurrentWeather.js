import React from 'react'
import cloudIcon from "../../Assets/Icons/04d.png"

const CurrentWeather = () => {
  return (
    <>
       <div className='grid grid-cols-2 p-8 w-[34vw] rounded-lg bg-zinc-700 text-white gap-10'>

          <div className='flex flex-col justify-between'>
              <div className='leading-none'>
                <p className='font-bold text-3xl'>Belgrade, RS</p>
                <p className='text-lg tracking-wider'>broken,clouds</p>
              </div>


            <div>
              <p className='text-8xl font-bold'>22°C</p>
            </div>

          </div>

          <div className='flex flex-col justify-between leading-tight'>
            
            <div className='relative left-[5vw] bottom-[3vh] ' >
              <img src={cloudIcon} alt={cloudIcon} width={100}   />
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
                <p>22°C</p>
                <p>2.06 m/s</p>
                <p>78%</p>
                <p>1015 hPa</p>
                
              </div>

            </div>

          

          </div>



          

       </div>
    </>
  )
}

export default CurrentWeather