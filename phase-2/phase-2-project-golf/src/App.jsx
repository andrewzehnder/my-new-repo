import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';
import Home from './components/Home'
import NavBar from './components/NavBar';
import Button from '@mui/material/Button';


const  App = () => {
const [courseList, setCourseList] = useState([])

useEffect(() => {
  fetch('http://localhost:3001/courses')
  .then ((resp) => resp.json())
  .then ((course) => setCourseList(course))
}, []);

const addCourses = course => {
  setCourseList([...courseList, course])
}

  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList courseList={ courseList } />}  />
          <Route path="/addcourse" element={<AddCourse addCourses={ addCourses }  />} />
      </Routes>
     </Router>
  );
}

export default App;
