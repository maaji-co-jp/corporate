import * as React from 'react'
import {Box, Container, Grid} from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{height: 50, marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Container sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <Box component="p">©️ 2022 Maaji, Inc.</Box>
      </Container>
    </Box>
  )
}

export default Footer
