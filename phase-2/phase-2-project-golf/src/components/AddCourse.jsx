import React, { useState } from 'react';

const AddCourse = ({ addCourses }) => {

    const [course, setCourse] = useState({
        name: "",
        location: "",
        price: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:3001/courses', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(course)
        })
        .then(resp => resp.json())
        .then(data => {
            addCourses(data)
        }) 
    }

    const handleChange = e => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        })
      }


  return (
    <div>
        <h1>AddCourse</h1>

        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="name">Course Name: </label>
                <input type="text" name="name" id="name" value={ course.name } onChange={ handleChange } />
            </div>
            <div>
                <label htmlFor="location">Location: </label>
                <input type="text" name="location" id="location" value={ course.location } onChange={ handleChange } />
            </div>
            <div>
                <label htmlFor="price">Price: </label>
                <input type="text" name="price" id="price" value={ course.price } onChange={ handleChange } />
            </div>

            <input type="submit" value="Add Course" />

        </form>


    </div>
  )
}

export default AddCourse