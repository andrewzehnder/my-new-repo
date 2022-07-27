import React, { useState} from 'react';

const AddCourse = () => {
    const [course, setCourse] = useState({
        course: "",
        location: "",
        price: ""
    })

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChange = e => {
        setCourse({
            [e.target.course]: e.target.value
        })
    }

  return (
    <div>
        <h1>AddCourse</h1>

        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="course">Course: </label>
                <input type="text" name="course" id="course" value={ course.course } onChange={ handleChange } />
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