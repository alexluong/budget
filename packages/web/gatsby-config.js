require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Budget",
    description: "",
    canonicalUrl: "https://www.crimsonhacks.com",
    image: "https://www.crimsonhacks.com/logo.png",
    social: {
      twitter: "@crimsonhacks",
    },
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",

    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`${__dirname}/src/index.js`),
      },
    },

    // Get assets (images)
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },

    // Fonts
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Source Sans Pro", "Bungee Shade"],
        },
      },
    },
  ],
}
