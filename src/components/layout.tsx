import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import * as styles from './layout.module.css'
import Head from './head'
import Header from './header'
import Hero from './hero'

const Layout = ({ pageTitle, children }: {pageTitle: string, children: React.ReactNode}) => {
  return (
    <div>
      <CssBaseline />
      <Head />
      <Header />
      <Hero />
      <Container>
        <header className={styles.siteTitle}>Maaji inc.</header>
        <nav>
          <ul className={styles.navLinks}>
            <li className={styles.navLinkItem}>
              <Link to="/" className={styles.navLinkText}>Home</Link>
            </li>
            <li className={styles.navLinkItem}>
              <Link to="/about" className={styles.navLinkText}>About</Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={styles.heading}>{pageTitle}</h1>
          {children}
        </main>
      </Container>
    </div>
  )
}

export default Layout
