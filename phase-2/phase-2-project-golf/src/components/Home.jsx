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
        <h1>Home Page</h1>
    </Div>
  )
}

export default Home