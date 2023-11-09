import React from 'react'
import {Form , Button} from 'react-bootstrap'
import style from './SearchBar.module.scss'
import {Autocomplete, TextField} from "@mui/material"

export default function SearchBar() {
  const handleInputChange = (e) => { 
    const {value} = e.currentTarget 
    fetch(`https://api.geoeapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${value}`)
    console.log(value)
   }  
  return (
   <Form>
        <Form.Group className={style.searchbarContainer}>
        <Autocomplete className={style.searchInput}   renderInput={(params) => <TextField onChange={handleInputChange} {...params} label={'Enter your City...'}/>} options={['Casablanca' , 'Rabat']} />
          <Button size='sm' variant={'primary'}>Search</Button>
        </Form.Group >
   </Form>
  )
}
