import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
    
    const particular_day = new Date().getDay();
    const forecast_days = days.slice(particular_day, days.length).concat(days.slice(0, particular_day))
    
  return (
    <>
    
    <div className='font-bold text-4xl text-center' >
        Daily
    </div>

    <div className='py-10'>
    <Accordion allowZeroExpanded  >
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='flex items-center w-[80vw] bg-[#f5f5f5] rounded-2xl justify-between px-2 cursor-pointer mb-6'>
                  <img src={require(`../../Assets/Icons/${item.weather[0].icon}.png`)}  alt="weather" className='w-[8vh]' />
                  <p >{forecast_days[idx]}</p>
                  <p >{item.weather[0].description}</p>
                  <p >{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</p>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div className='flex justify-between p-4 mb-6 bg-[#d8d7d7] rounded-2xl'>
              <div > 
                <p>Pressure</p>
                <p>Clouds</p>
                <p>Humidity</p>
              
              </div>


              <div >
               
                <p>{item.main.pressure}</p>
                <p>{item.clouds.all}%</p>
                <p>{item.main.humidity}</p>
               
                
              </div>

              <div > 
               
               <p>Wind Speed</p>
               <p>Sea level</p>
               <p>Feels like</p>
             </div>

              <div >
               
                
                <p>{item.wind.speed}m/s</p>
                <p>{item.main.sea_level}m</p>
                <p>{item.main.feels_like}°C</p>
                
              </div>

             
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>

    
    
    </>
  )
}

export default Forecast