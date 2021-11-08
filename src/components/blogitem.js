import React from "react"
import { Link } from "gatsby"
import sampleImage from "../images/image_002.jpg"
import { Card } from "react-bootstrap"

function BlogItem() {
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={sampleImage}></Card.Img>
      <Card.Body>
        <Card.Title>ブログ　タイトル</Card.Title>
        <Card.Title>2020/04/11</Card.Title>
      </Card.Body>
      <Link to="">see more</Link>
    </Card>
  )
}

export default BlogItem
