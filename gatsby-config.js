module.exports = {
  pathPrefix:'gatsby-demo',
  siteMetadata: {
    title: 'Bloggin, I be bloggin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/`,
      },
    }
  ],
}
