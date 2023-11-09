import React from 'react'
import style from './Weather.module.scss'
import { Card,  } from 'react-bootstrap'
import PositionSvg from '../Svgs/PositionSvg'
import DefaultWeather from '../Svgs/DefaultWeather'
import Time from '../Svgs/Time'
import Thermometer from '../Svgs/Thermometer'
import Wind from '../Svgs/Wind'
export default function Weather() {
  return (
   <>
    <Card className={style.container}>
    <Card.Body>
        <Card.Title>
            Casablaca ,MA  <PositionSvg color={'rgba(255,255,255,0.5)'}/>
            <div className={style.date}>
           <div> Saturday, 15:00 AM</div>
            <div><Time width={'15px' }height={'15px'}/></div>
           </div>
        </Card.Title>
        <Card.Text as={'div'} className={style.weather_info}>
           <DefaultWeather width={'250px'} height={'250px'}/>  
           <div className={style.temp}>
            <div >35 C</div>
            <div><Thermometer/></div>
           </div>
            <div >Good Morning Casablanca
              <div className={style.hr_separate} ></div>
            </div>
            
          
         <div className={style.infos}>
          <div className={style.border_right}>
         <div><DefaultWeather color={"white"}/></div>
            <div>Sunrise</div>
            <div>8:00</div>
            </div>
          
          <div  className={style.border_right}>
          <div><Wind color={"white"}/></div>
            <div>Wind</div>
            <div>10m/s</div>
          </div>
          <div>
          <div><Thermometer color={"white"} width='25px' height='25px'/></div>
            <div>Temp</div>
            <div>35°</div>
          </div>
         </div>
         
            </Card.Text>
    </Card.Body>
    </Card>
   </>
  )
}
