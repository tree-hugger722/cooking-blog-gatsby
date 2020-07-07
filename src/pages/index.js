import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Login from "../components/Login/identity"
import SEO from "../components/seo"

import "./styles.css"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <Login />
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div className="blog-previews" key={title}>
              <Img
                className="blog-post-image"
                sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
              />
              <article key={node.fields.slug}>
                <div className="blog-preview-text">
                  <header>
                    <h3 className="blog-post-title">
                      <Link className="blog-link" to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </div>
              </article>
            </div>
          )
        })}
        <Bio />
      </Layout>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
