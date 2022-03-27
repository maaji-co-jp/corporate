import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import * as styles from './layout.module.css'

const Layout = ({ pageTitle, children }: {pageTitle: string, children: React.ReactNode}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={styles.container}>
      <Helmet>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      </Helmet>
      <header className={styles.siteTitle}>{data.site.siteMetadata.title}</header>
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
    </div>
  )
}
export default Layout
