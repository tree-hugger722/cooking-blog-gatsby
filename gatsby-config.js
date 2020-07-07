module.exports = {
  pathPrefix: "/cooking-blog-gatsby",
  siteMetadata: {
    title: `Taste of CLE`,
    author: {
      name: `Emma Neil`,
      summary: `who has spent her quarantine cooking, coding, and learning in Shaker Heights, OH`,
    },
    description: `A cooking blog.`,
    siteUrl: `https://emma-neil.github.io/cooking-blog-gatsby/`,
    social: {
      linkedin: `emma-neil-538891177`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo-48x48-white-circular.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Fredericka the Great", "Nunito", "Merriweather"],
        },
      },
    },

    {
      resolve: `gatsby-plugin-netlify-cms`,
    },
    {
      resolve: "gatsby-plugin-netlify-identity",
      options: {
        url: "https://tasteofclecooking.netlify.app/",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
