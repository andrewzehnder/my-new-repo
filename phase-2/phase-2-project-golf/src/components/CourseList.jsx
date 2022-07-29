import React from 'react'
import CourseForm from './CourseForm'

const CourseList = ({ courseList }) => {

  console.log("courseList", courseList)
  
  const courseItem = courseList.map(course => <CourseForm key={ course.id } course={ course }/>) 
  
  return (
    <div>
        <h1>Course List</h1>
        <ul>
          { courseItem }
        </ul>
    </div>
  )
}

export default CourseList