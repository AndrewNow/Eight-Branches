const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Define a template for blog post

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      blog: allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { eq: "/src/content/blog" } }
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
      events: allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { eq: "/src/content/events" } }
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)
  
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
      )
      console.log("result:", results) 
      return
  }

  const blogPosts = result.data.blog.nodes
  const eventPosts = result.data.events.nodes

  console.log(blog, events)
  console.log(blogPost, eventPost)


  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const eventPost = path.resolve(`./src/templates/event-post.js`)

  if (blogPosts.length > 0 && eventPosts.length > 0) {
    blogPosts.forEach((node, index) => {
      const previousPostId = index === 0 ? null : blogPosts[index - 1].id
      const nextPostId =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].id

      createPage({
        path: node.fields.slug,
        component: blogPost,
        context: {
          id: node.id,
          previousPostId,
          nextPostId,
        },
      })
    })

    eventPosts.forEach((node, index) => {
      const previousPostId = index === 0 ? null : eventPosts[index - 1].id
      const nextPostId =
        index === eventPosts.length - 1 ? null : eventPosts[index + 1].id

      createPage({
        path: node.fields.slug,
        component: eventPost,
        context: {
          id: node.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
