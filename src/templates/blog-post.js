import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./blog-post.css"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="site-text">
        <header className="blog-header">
          <h1 className="blog-post-title">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <Img
          className="featured-image"
          sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
        />
        <br />
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </article>

      <nav>
        <ul className="return-to-page">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Bio className="blog-post-bio" />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
