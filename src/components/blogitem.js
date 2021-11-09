import React from "react"
import { Link } from "gatsby"
import sampleImage from "../images/image_002.jpg"
import { Card } from "react-bootstrap"

function BlogItem({ title, date, src, link }) {
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={src}></Card.Img>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{date}</Card.Title>
      </Card.Body>
      <Link to={`/${link}`}>seemore</Link>
    </Card>
  )
}

export default BlogItem
