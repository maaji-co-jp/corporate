import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Head from './head'
import Header from './header'
import Hero from './hero'
import Footer from './footer'

const Layout = ({ pageTitle, children }: {pageTitle: string, children: React.ReactNode}) => {
  return (
    <div>
      <CssBaseline />
      <Head />
      <Header />
      <Hero />
      <Container>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </Container>
      <Footer />
    </div>
  )
}

export default Layout
