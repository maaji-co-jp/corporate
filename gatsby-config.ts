import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Maaji inc.',
    siteUrl: 'https://maaji.co.jp',
    icon: 'src/images/favicon.ico', 
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
  ],
}

export default config
