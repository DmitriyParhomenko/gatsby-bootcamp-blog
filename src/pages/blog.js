import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {

  // allMarkdownRemark

  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort:{
          fields:publishedDate,
          order:DESC
        }
      ) {
        edges {
          node {
            title
            slug 
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog"/>
      <h1>Hello.</h1>
      {/* allMarkdownRemark */}
      {/* <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          return (
            <li key={index} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link> 
            </li>
          )
        })}
      </ol> */}
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, index) => {
          return (
            <li key={index} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link> 
            </li> 
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
