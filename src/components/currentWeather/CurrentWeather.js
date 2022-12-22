import React from 'react'

const CurrentWeather = () => {
  return (
    <>
       <div className='grid grid-cols-2 p-8 w-[30vw] h-[15vw] rounded-lg bg-zinc-700 text-white'>

          <div className='flex flex-col justify-between'>
              <div className='leading-none'>
                <p className='font-bold text-xl'>Belgrade, RS</p>
                <p>broken,clouds</p>
              </div>


            <div>
              <p className='text-7xl font-bold'>22°C</p>
            </div>

          </div>

          <div className='flex flex-col justify-between leading-tight'>
            
            <div></div>
            <div className='flex justify-between '>
              <div > 
                <p >Details</p>
                <p>Feels like</p>
                <p>Wind</p>
                <p>Humidity</p>
                <p>Pressure</p>
              </div>


              <div>
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