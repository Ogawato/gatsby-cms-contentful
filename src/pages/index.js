import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Kv from "../components/kv"
import { Col, Container, Row } from "react-bootstrap"
import BlogItem from "../components/blogitem"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              data
              title
              thumbnail {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <Kv></Kv>
      <Container>
        <Row>
          {data.allMarkdownRemark.edges.map((edge, index) => (
            <Col sm={4} key={index}>
              <BlogItem
                title={edge.node.frontmatter.title}
                date={edge.node.frontmatter.date}
                src={edge.node.frontmatter.thumbnail.childImageSharp.fluid.src}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
