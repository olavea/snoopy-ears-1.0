const axios = require("axios")

export default async function handler(req, res) {
    const { city, year } = req.body;
    const email = "ola@olavea.com"
    const message = `You time-travelled to ${city}, in year ${year}`;
    const U_PUSH_KEY = "U_PUSH_KEY"

    console.log({ city, year, email })
   //  try {

        await axios.post(

            "https://push.userlist.com/users",
            // Leg
            // Body
            {
                email: email,
                properties: {
                    city: city,
                    year: year,
                },
            },

            {
                headers: {
                    Authorization:
                    `Push ${process.
                        env.
                        USERLIST_PUSH_API_KEY}`,
                },
            }
        );
        res.status(200).json({ message: message })
    // } catch (error) {
    //     res.status(500).json({
    //         message: error.message,
    //         email: email,
    //     })
    // }

}