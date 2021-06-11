import {graphql} from "gatsby"
import React from "react"

export default function DateOfArrival() {
    return (
        <p>Let's go to data.wpPost.date</p>
    )
}

export const query = graphql`
    query WerlinDollarid(
        $id: String
    ) {
        wpPost(
            id: {eq: $id}
        ) {


                    date


        }
    }
`




// export const pageQuery = graphql`
//     query askWerlinDollaridToGrabDate(
//         $id: String
//     ){
//         wpPost(id: {eq: $id}){
//             date
//         }
//     }
// `;