

// const createError = require("http-errors")

// export default async function hand(req, res) {
//     try {
//       // Only handle POST requests fro webhooks
//       if (req.method === "POST") {
//           await webhookHand(req, res);
//       } else {
//           throw createError(405, `${req.method} not allowed`);
//       }
//     } catch (error) {
//         // S
//         console.error("Stripe WebHook", error.message);

//         // Respond with error code and message
//         res.status(error.statusCode || 500).json({
//             message: error.expose ? error.message : "Faulty TimeShip",
//         });
//     }
//   }
//   const webhookHand = async (req, res) => {
//       // 12:23
//       console.log("Stripe event type", req.body.type);
//       //  1. Validate
//       const { type, data } = req.body;
//       //  2. Do your thing
//       //  3. Respond
//       res.json({});
//   };
//   // You use a similar type of boiler plate 12:07 gatsby fall camp
//   // https://youtu.be/s2yjFq_wDsE?t=728
//   // https://youtu.be/s2yjFq_wDsE