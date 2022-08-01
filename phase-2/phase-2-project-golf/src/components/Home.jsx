import React from 'react'
import { styled } from '@mui/material/styles';

const Home = () => {

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  return (
    <Div>
        <img 
        src="https://www.quinterogolf.com/wp-content/uploads/2020/03/bkg-hole-1.jpg"
        height={300}
        width={1200}
        />
        <h1>Welcome to your complete guide to Arizona Golf</h1>
        <h3>
          <div>This list is built and maintained by golfers like you!</div>
          <div>- Click on the course list menu option to see our already added and reviewed courses.</div>
          <div>- Click on the add course menu option to add a new course.</div>
        </h3>
        
      
    </Div>
  )
}

export default Home