import * as React from 'react'
import { Box, Container, Typography } from '@mui/material';
import * as styles from './hero.module.css'

const Hero = () => {
  return(
    <Box className={styles.container}>
      <Container>
        <Typography className={styles.heroText} variant="h3" component="p">
          テクノロジーで<br />世界を楽しく
        </Typography>
      </Container>
    </Box>
  )
}

export default Hero
