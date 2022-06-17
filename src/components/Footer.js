import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <Link to='/'>
          <img src={Logo} alt='Logo' width='200px' height='200px' />
        </Link>
        <Typography variant='h5' pb='40px' mt='20px'>
          Handrafted by PPB-Projects
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer