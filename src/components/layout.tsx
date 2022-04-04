import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import Head from './head'
import Header from './header'
import Hero from './hero'
import Footer from './footer'

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div>
      <CssBaseline />
      <Head />
      <Header />
      <Hero />
      <Container maxWidth="md">
        <main>
          {children}
        </main>
      </Container>
      <Footer />
    </div>
  )
}

export default Layout
