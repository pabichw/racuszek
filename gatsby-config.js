module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      
      options: {
        custom: {
          families: ["LilyScriptOne, Montserrat, MontserratBold"],
            urls: ["/fonts/fonts.css"],
        },
      },
    }
  ]
}
