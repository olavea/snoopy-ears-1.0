import React from "react"
import { Button, Flex, Box } from "theme-ui"
import Layout from "../../components/Layout"

import useSound from "use-sound"
import laugh1 from "../../assets/podcasts/3-show-your-code-episode-3_recording-1_2021-03-31-Podcast-ready-olavea.mp3"
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
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Button
            onClick={play}
            // What should the user do to stop laughter?
            // Frown? Say "STOP laughing!"
            sx={{ height: "80vh", width: "clamp(30px, 30vw, 600px)" }}
          >
            <h1>Show Your Code </h1>
            <h2>Episode 4 </h2>
            <h2>Tom Erik Støwer and</h2>
            <h2>Ola Vea</h2>

          </Button>

        </Box>

      </Flex>
      <div>
      <a href="https://gist.github.com/testower/190e8738ea5913ccce503bcc7774b60c">
          Tom Erik's gist
      </a>
      </div>
      <div>
      <a href="https://github.com/redisson/redisson/pull/3531">
          Tom Erik's pull request
      </a>
      </div>


      <div>
      <a href="https://tomerikstower.com/">
          Tom Erik's blog
      </a>
      </div>
        </Layout>
      </>
    )
  }