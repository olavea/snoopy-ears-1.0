import React from "react"
import { Button, Flex, Box } from "theme-ui"
import Layout from "../../components/Layout"
import {StaticImage} from "gatsby-plugin-image"

import useSound from "use-sound"
//import laugh1 from "../../assets/podcasts/3-show-your-code-episode-3_recording-1_2021-03-31-Podcast-ready-olavea.mp3"
import laugh1 from "../../assets/books/audio/ZOOM0275.mp3"

import pick1 from "../../assets/books/pics/01.png"
import pick2 from "../../assets/books/pics/02.png"
// import laugh2 from "../assets/laughs/Laugh2LillianBenedicte2020.mp3"
// import laugh3 from "../assets/laughs/Laugh3LillianJUNE_30_2016_Trampolinelykke_paa_landet_hos_babywildelvs.mp3"
//Users/olavea/Desktop/Develop/100days/snoopy-ears-1.0/snoopy-ears-1.0/src/assets/podcasts/3-show-your-code-episode-3_recording-1_2021-03-31-Podcast-ready-olavea.mp3
//snoopy-ears-1.0/src/assets/podcasts/3-show-your-code-episode-3_recording-1_2021-03-31-Podcast-ready-olavea.mp3

export default function Four() {
    const [play, {stop}] = useSound(laugh1);
    return (
        <>
          <Layout>
            <Flex
              bg=""
              sx={{
                height: "70vh",
                width: "70vw",
                justifyContent: "center",
                alignItems: "center",

              }}
            >
              <Box>
                <Button
                  onClick={play}
                  // What should the user do to stop laughter?
                  // Frown? Say "STOP laughing!"
                  sx={{  height: "50vh", width: "clamp(30px, 30vw, 600px)" }}
                >
                  <h2>Click here to play</h2>
                  <h1>Lillian's Book </h1>
                </Button>

              </Box>

            </Flex>
          <div>
            <StaticImage
              src="../../assets/books/pics/01.png"
              alt="Lillian's Book"
              layout="fullWidth"

            />
            <h3>Lillian's Book</h3>
            <p>01.</p>
            <div></div>
            <StaticImage
              src="../../assets/books/pics/02.png"
              alt="A dog and a Pirate Princess"
              layout="fullWidth"

            />
            <h3>A dog and a Pirate Princess</h3>
            <p>02.</p>
            <div></div>

            <StaticImage
              src="../../assets/books/pics/03.png"
              alt="Then they saw The Castle"
              layout="fullWidth"

            />
            <h3>Then they saw The Castle</h3>
            <p>03.</p>
            <div></div>
            <StaticImage
              src="../../assets/books/pics/04.png"
              alt="The Castle"
              layout="fullWidth"

            />
            <h3>The Castle</h3>
            <p>04.</p>
            <div></div>

            <StaticImage
              src="../../assets/books/pics/05.png"
              alt="Then they saw a dog, who joined them"
              layout="fullWidth"

            />
            <h3>Then they saw a dog, who joined them.</h3>
            <p>05.</p>
            <div></div>
            <StaticImage
              src="../../assets/books/pics/06.png"
              alt="And then they took a walk"
              layout="fullWidth"

            />
            <h3>And then they took a walk.</h3>
            <p>06.</p>
            <div></div>

            <StaticImage
              src="../../assets/books/pics/07.png"
              alt="And then they saw an easter egg"
              layout="fullWidth"

            />
            <h3>And then they saw an easter egg.</h3>
            <p>07.</p>
            <div></div>
            <div></div>
            <StaticImage
              src="../../assets/books/pics/08.png"
              alt="An easter egg"
              layout="fullWidth"

            />
            <h3>And Good Bye! Finished!</h3>
            <p>08.</p>
            <div></div>

            </div>
        </Layout>
      </>
    )
  }