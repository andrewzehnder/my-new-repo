import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import CourseList from './components/CourseList';
import Home from './components/Home'
import NavBar from './components/NavBar';


const  App = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/addcourse" element={<AddCourse />} />
      </Routes>
     </Router>
  );
}

export default App;
