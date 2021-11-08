import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Kv from "../components/kv"
import { Col, Container, Row } from "react-bootstrap"
import BlogItem from "../components/blogitem"

const IndexPage = () => (
  <Layout>
    <Kv></Kv>
    <Container>
      <Row>
        <Col sm={4}>
          <BlogItem />
        </Col>
        <Col sm={4}>
          <BlogItem />
        </Col>
        <Col sm={4}>
          <BlogItem />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
