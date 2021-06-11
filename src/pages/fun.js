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
        <h2>COMING SOON: GATSBYJS FUNCTIONS FREE OF DISTRACTIONS</h2>
        <br/>
        <h1>NOT SURE WHEN YOU'LL FIND THE HEADSPACE TO PRACTICE GATSBYJS FUNCTIONS?</h1>
        <p>Distractions suck. 😅 Distractions suck your time. Distractions suck your energy. And last but not least distractions suck at your focus and makes your practice less mindfull. And you probably have noticed that automating a new micro skill in your brain demands mindfull practice. Distractions are the enemies of new skills like Gatsby functions.</p>
        <br/>
        <h2>IMAGINE PLAYING AROUND WITH GATSBY FUNCTIONS PIRATICALLY FREE OF DISTRACTIONS</h2>
        <p>Imagine this – You're at your favourite place, with your favourite refreshment, but WITHOUT distractions. You know piratically playing around with Gatsby functions, but no digital noise can even come near you. Only a dream surely, or IS it....?</p>
        <br/>
        <h2>PRINT OUT A WORKBOOK OF GATSBY FUNCTIONS TASKS TESTED ON A SEASONED CREW OF GATSBY–PIRATES</h2>
        <p> – Get un-DISTRACTED for 90 minutes – Sometimes what it takes to get un-distracted is to lock your distracTOR compuTOR up, under deck. In chains. Gagged and at gun point. Imprisoned along with your phone and any other distracTOR device in your life. Settle down and immerse yourself in the tiny tasks of your printed out workbook of Gatsby functions.</p>
        <h2>DO YOU WANT TO FOLLOW LILLIAN'S (6 🦄🏴‍☠️) & OLA'S (43 😺🏴‍☠️) PROGRESS BUILDING THE WORKBOOK?</h2>
        <h2>SIGN UP FOR EMAIL UPDATES NOW!</h2>

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