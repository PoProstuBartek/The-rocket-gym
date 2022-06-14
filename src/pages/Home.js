import React, { useState } from 'react';
import { Box } from '@mui/system';
import HeroBaner from '../components/HeroBaner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  return (
    <Box>
      <HeroBaner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home