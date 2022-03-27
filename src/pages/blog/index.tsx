import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }: {data: any}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
