import React from 'react'
import wallPaper from '../../Assets/img/wallPaper.jpg'
import './Wallpaper.scss'

export default function Wallpeper() {
  return (
  
      <div className='wallpaper-container position-fixed d-flex top-0 bottom-0 start-0 end-0 '>
        <img className='wallpaper' src={wallPaper} alt="weather" />
    </div>
 
  )
}
