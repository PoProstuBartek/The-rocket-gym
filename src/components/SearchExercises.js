import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' }}} mb='50px' textAlign='center'>
        Awesome Exercises You<br /> Sholud Know 
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
          sx={{ 
            input: { fontWeight: '700', border: 'none', borderRadius: '5px'},
            width: { lg: '800px', xs: '300px'},
            backgroundColor: '#fff',
          }}
          height='76px' 
          value='' 
          onChange={(e) => {}} 
          placeholder='Search Exercises' 
          type='text' 
        />
        <Button className='search-btn'
          sx={{
            backgroundColor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175', xs: '80' },
            fontSize: { lg: '18px', xs: '14px'},
            height: '56px',
            position: 'absolute',
            right: 0
           }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises