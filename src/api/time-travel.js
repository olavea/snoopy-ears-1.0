const axios = require("axios")

export default async function handler(req, res) {
    const { city, year, email } = req.body;
    const message = `You time-travelled to ${city}, in year ${year}`;
    const U_PUSH_KEY = "U_PUSH_KEY"

    console.log({ city, year, email })
    try {

        await axios.post(

                "https://push.userlist.com/users",
            {
                email: email,
                properties: {
                    city: city,
                    year: year,
                },
            },

            {
                headers: {
                    Authorization: `Push ${U_PUSH_KEY}`,
                },
            }
        )
        res.status(200).json({ message: message })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            email: email,
        })
    }



    // const log = (...args) => {
    //     console.log("Userlist:", ...args)
    // }

    // const upsertUserlistSubscriber = async ({identifier, email, properties}) => {
    //     await userlistApi.post(`users`, {identifier, email, properties,})
    //     log("Us", identifier)

    // }
    // return {
    //     upsertUserlistSubscriber
    // }
}