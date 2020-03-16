module.exports = {
  siteMetadata: {
    title: 'CoronaCrusaders',
    author: 'Brian Groat',
    description: 'Build your base. Protect your pod. Save the world.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/dna.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
