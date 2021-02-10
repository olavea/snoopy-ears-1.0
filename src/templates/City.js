import { graphql } from 'gatsby'
import React from 'react'
import Img from "gatsby-image"

export default function SingleCityPage(data) {
const mockData = {"data": {
  "contentfulCity": {
    "image": {
      "fluid": {
        "base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAOABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAUHAQb/xAAkEAABBAEEAwADAQAAAAAAAAABAgMEEQUABhIhBzFBE0JRcf/EABcBAAMBAAAAAAAAAAAAAAAAAAEDBQb/xAAhEQACAgEDBQEAAAAAAAAAAAABAgMRAAQFIRIxYYHR8P/aAAwDAQACEQMRAD8AWzfL+3lP5uPH201Fb4BUlCpjzi6+2ao8ieqAq/RrWxfIuNmKx6nMEEY6O...",
        "aspectRatio": 1.412751677852349,
        "src": "//images.ctfassets.net/4zhx15eo3eqn/15nqM48cchmSbTr7oZ5EkO/a999c8270d8da2a585a9a36b00a457fd/100DaysOfGatsby-day-39-task-9-Img-Netlify-49.jpg?w=800&q=50",
        "srcSet": "//images.ctfassets.net/4zhx15eo3eqn/15nqM48cchmSbTr7oZ5EkO/a999c8270d8da2a585a9a36b00a457fd/100DaysOfGatsby-day-39-task-9-Img-Netlify-49.jpg?w=200&h=142&q=50 200w,\n//images.ctfassets.net/4zhx15eo3eqn/15nqM48cchmSbTr7oZ5EkO/a999c8270d8da2a585a9a36b00a457fd/100DaysOfGatsby-day-39-task-9-Img-Netlify-49.jpg?w=400&h=283&q=50 400w,\n//images.ctfassets.net/4zhx15eo3eqn/15nqM48cchmSbTr7oZ5EkO/a999c8270d8da2a585a9a36b00a457fd/100DaysOfGatsby-day-39-task-9-Img-Netlify-49.jpg?w=421&h=298&q=50 421w",
        "sizes": "(max-width: 800px) 100vw, 800px"
      }
    }
  }
}
        }
console.log(mockData.data.contentfulCity.image.fluid.src)
console.log(data.data.contentfulCity.image.fluid)
  return (
      <div>
        <h1>Hello gatsby-image</h1>
        <Img fluid={mockData.data.contentfulCity.image.fluid} />
      </div>
    )
}
// <Img fluid={data.contentfulCity.image.fluid.src} />
// This needs to be dynamic
// based on the slug
// passed in via context in
// gatsby-node.js

export const query = graphql`
  query($slug: String!) {

    contentfulCity(slug: {eq: $slug}) {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }

  }




`;


