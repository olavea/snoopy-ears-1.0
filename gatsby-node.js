








require("dotenv").config({
    path: `.env${process.env.NODE_ENV}`,
  })

const {google} = require("googleapis");

exports.sourceNodes = () => {

    console.log("source node");
    const youtube = google.youtube({
        version: "v3",
        auth: process.env.GOOGLE_API_KEY,
      });
      youtube.search.list({
        channelId: "",
        part: "snippet",
        maxResults: 2,
        order: "date",
        type: "video",
      })
};