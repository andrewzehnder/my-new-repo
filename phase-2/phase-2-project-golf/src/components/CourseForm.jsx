import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';



const CourseForm = ({ course }) => {

  const courseTopInfo = [`${course.name} | ${course.location}`]
  const courseRatingInfo = [`Rating: ${course.rating}`]
  const coursePriceInfo = [`Price: ${course.price}`]

  const listItemInfo = (
    <>
    <div>{courseTopInfo}</div>
    <div>{courseRatingInfo}</div>
    <div>{coursePriceInfo}</div>
    </>
  )

  return (

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
          <a href={course.website} target="_blank">{ listItemInfo }</a>
      </ListItem>

    </List>
  )
}

export default CourseForm