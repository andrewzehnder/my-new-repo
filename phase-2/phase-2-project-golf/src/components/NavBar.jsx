import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Course List</Link></li>
            <li><Link to="/addcourse">Add Course</Link></li>
        </ul>
    </div>
  )
}

export default NavBar