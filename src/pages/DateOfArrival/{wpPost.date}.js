import {graphql} from "gatsby"



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