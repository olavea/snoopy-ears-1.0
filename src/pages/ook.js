import React from "react"
import ConvertKitForm from 'convertkit-react'
import Layout from "../components/Layout"
import {StaticImage} from "gatsby-plugin-image"

// import .env from "../../.env.dev"
// posts/by-lillian-raae-vea/Ruby_2_Rubys_TimeShip_2.png
const GATSBY_CONVERTKIT_FORM_ID = 2209849

export default function OokPage() {

  return (
    <>
      <Layout>
        <h1>Practice Programming Like a Pyrate Princess with Print-Outs</h1>
        <p>Lillian (6 🦄🏴‍☠️) & Ola (43 😺) are BETA testing chapter one of our picture book about:</p>
        <h2>Practicing programming GatsbyJS with paper and coloring pens</h2>
        <p>We need you to say yes to getting 9 emails, but printing out and coloring the print-outs is NOT required. (No pirates were harmed in this picture book 🤞)</p>


        <ConvertKitForm formId={GATSBY_CONVERTKIT_FORM_ID} />
        <p>This image is the old cover page, the new BETA version is different, juz saaayin' 😺.</p>
        <StaticImage
            src="https://pbs.twimg.com/media/EjO5-6dX0AAmE9r?format=jpg&name=small"
            alt="Ruby's TimeShip Goes Deeper"
            layout="fullWidth"

        />
      </Layout>
    </>
  )
}