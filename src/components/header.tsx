import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
  return(
    <AppBar elevation={24} color="inherit">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Link to="/">
          <StaticImage
            alt="maajiのロゴ"
            src="../images/logo.png"
            loading="eager"
            width={200}
          />
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
