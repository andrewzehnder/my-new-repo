import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const AddCourse = ({ addCourses }) => {

    const [course, setCourse] = useState({
        name: "",
        location: "",
        price: "",
        rating: "",
        website: ""
    })

    const navigate = useNavigate(0);

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
            addCourses(data);
            navigate('/courses');
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

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
      <div>
        <TextField
          required
          id="name"
          label="Course Name:"
          type="text"
          name="name"
          value={ course.name } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="location"
          label="Location:"
          type="text"
          name="location"
          value={ course.location } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="price"
          label="Price:"
          type="text"
          name="price"
          value={ course.price } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="rating"
          label="Rating:"
          type="text"
          name="rating"
          value={ course.rating } 
          onChange={ handleChange }
        />
        </div>

        <div>
        <TextField
          required
          id="website"
          label="Website URL:"
          type="text"
          name="website"
          value={ course.website } 
          onChange={ handleChange }
        />
        </div>
        </Box>

            {/* <div>
                <label htmlFor="name">Course Name: </label>
                <input type="text" name="name" id="name" value={ course.name } onChange={ handleChange } />
            </div> */}
            {/* <div>
                <label htmlFor="location">Location: </label>
                <input type="text" name="location" id="location" value={ course.location } onChange={ handleChange } />
            </div> */}
            {/* <div>
                <label htmlFor="price">Price: </label>
                <input type="text" name="price" id="price" value={ course.price } onChange={ handleChange } />
            </div> */}
            {/* <div>
                <label htmlFor="website">Website URL: </label>
                <input type="text" name="website" id="website" value={ course.website } onChange={ handleChange } />
            </div> */}

            <Button input type="submit" variant="outlined" >Add New Course</Button>
        
        </form>


    </div>
  )
}

export default AddCourse