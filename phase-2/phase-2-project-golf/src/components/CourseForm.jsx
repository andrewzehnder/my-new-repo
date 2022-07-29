import React from 'react'
import { Link } from 'react-router-dom'

const CourseForm = ({ course }) => {

  console.log("courseForm", course)

  return (
    <li>
      <Link to="#">
        { course.course } | {course.location}
      </Link>
    </li>
  )
}

export default CourseForm