import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StoriesPage = ({data}) => (
  <Layout>
    <SEO title="Stories" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by {post.node.frontmatter.author}</small>
        <br/>
        <br/>
        <Link to={post.node.frontmatter.path}>Read story</Link>
        <br/>
        <br/>
        <hr/>
      </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const pageQuery = graphql`
query StoryIndexQuery{
  allMarkdownRemark{
    edges{
      node{
        id
        frontmatter{
          path
          title
          author
        }
      }
    }
  }
}
`

export default StoriesPage
