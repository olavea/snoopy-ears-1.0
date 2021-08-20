import React from "react"
import ConvertKitForm from 'convertkit-react'
import Layout from "../components/Layout"
import {StaticImage} from "gatsby-plugin-image"
const GATSBY_CONVERTKIT_FORM_ID = 2356011
// posts/by-lillian-raae-vea/Ruby_2_Rubys_TimeShip_2.png

export default function FunPage() {
  return (
    <>
      <Layout>
        <h2>COMING SOON => GATSBYJS FUNCTIONS + YOU = TRUE ❤</h2>
        <br/>
        <h1>NOT SURE HOW TO DIVE DEEPER INTO SERVERLESS GATSBY FUNCTIONS?</h1>
        <p>Maybe you have tried AWS 😅 .</p>
        <br/>
        <h2>IMAGINE KNOWING EXACTLY HOW TO BUILD A SERVERLESS GATSBY FUNCTION TIMESHIP</h2>
        <p>Imagine this – ... Only a dream surely, or IS it....?</p>
        <br/>
        <h2>OUR FREE SERVERLESS GATSBY FUNCTION WEBINAR WILL MAKE YOU PRACTICE PIRATICALLY PLAYFULLER</h2>
        <p> – Get un-DISTRACTED for 90 minutes – Sometimes what it takes to get un-distracted is to lock your distracTOR compuTOR up, under deck. In chains. Gagged and at gun point. Imprisoned along with your phone and any other distracTOR device in your life. Settle down and immerse yourself in the tiny tasks of your printed out workbook of Gatsby functions.</p>
        <h2>DO YOU WANT TO FOLLOW LILLIAN'S (6 🏴‍☠️👸) & OLA'S (43 😺🏴‍☠️) PROGRESS BUILDING THE WORKBOOK?</h2>
        <h2>SIGN UP FOR EMAIL UPDATES NOW AND GET THE LINK TO THE WEBINAR!</h2>

        <ConvertKitForm formId={GATSBY_CONVERTKIT_FORM_ID} />
        <p>The heros from our picture book will also be in this Gatsby functions workbook 😺.</p>
        <StaticImage
            src="https://pbs.twimg.com/media/EjO5-6dX0AAmE9r?format=jpg&name=small"
            alt="Ruby's TimeShip Goes Deeper"
            layout="fullWidth"

        />
      </Layout>
    </>
  )
}