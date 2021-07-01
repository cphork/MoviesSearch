import React from "react"
import {useState} from 'react'


const Form = (props) => {

    const[formData, setFormData] =useState({
        searchterm: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event)  => {
            event.preventDefault()
            props.moviesearch(formData.searchterm)
    }


    return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input type ='text'  value={formData.searchterm} name= 'searchterm' onChange={handleChange} />
            <input type ='submit' value='submit' />
        </form>
    </div>

    )
}



export default Form