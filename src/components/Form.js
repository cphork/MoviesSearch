import React from "react"
import { useState } from 'react'


const Form = (props) => {

    const [formData, setFormData] = useState({
        searchterm: ""
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.moviesearch(formData.searchterm)
    }


    return (
        <div className='search-btn'>
            <div className='header-logo'>
                <img className='film' src='https://cdn1.vectorstock.com/i/1000x1000/15/60/reel-film-sign-orange-icon-on-black-background-vector-13391560.jpg' />
                <h3>Movie Search</h3>
            </div>

            <form onSubmit={handleSubmit}>
                <input type='text'
                    placeholder='Enter Movie Title'
                    value={formData.searchterm}
                    name='searchterm'
                    onChange={handleChange} />
                <input type='submit' value='submit' />
            </form>
        </div>

    )
}



export default Form