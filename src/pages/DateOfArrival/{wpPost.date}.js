import {graphql} from "gatsby"
import React from "react"

const ShowDate = ({data}) => <h1>{data.wpPost.date}</h1>

export const pageQuery = graphql`
    query askWerlinDollaridToGrabDate(
        $id: String
    ){
        wpPost(id: {eq: $id}){
            date
        }
    }
`;

export default ShowDate