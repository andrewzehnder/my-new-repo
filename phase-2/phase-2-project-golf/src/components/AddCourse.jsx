import React, { useState} from 'react';

const AddCourse = () => {
    const [course, setCourse] = useState([])


  return (
    <div>
        <h1>AddCourse</h1>

        <form>
            <div>
                <label htmlFor="course">Course: </label>
                <input type="text" name="course" id="course" />

                <label htmlFor="location">Location: </label>
                <input type="text" name="location" id="location" />

                <label htmlFor="price">Price: </label>
                <input type="text" name="price" id="price" />
            </div>

            <input type="submit" value="Add Course" />

        </form>


    </div>
  )
}

export default AddCourse