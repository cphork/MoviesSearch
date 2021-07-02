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
            <h3>X Movie Search</h3>
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