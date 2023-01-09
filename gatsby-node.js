const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  // Define a template for blog post

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    query {
      blog: allFile(
        sort: {
          fields: childrenMarkdownRemark___frontmatter___date
          order: ASC
        }
        filter: {
          sourceInstanceName: { eq: "blog" }
          internal: { mediaType: { eq: "text/markdown" } }
        }
      ) {
        nodes {
          childMarkdownRemark {
            fields {
              slug
            }
            id
          }
        }
      }
      events: allFile(
        sort: {
          fields: childrenMarkdownRemark___frontmatter___date
          order: ASC
        }
        filter: {
          sourceInstanceName: { eq: "events" }
          internal: { mediaType: { eq: "text/markdown" } }
        }
      ) {
        nodes {
          childMarkdownRemark {
            fields {
              slug
            }
            id
          }
        }
      }
      careers: allFile(
        sort: {
          fields: childrenMarkdownRemark___frontmatter___date
          order: ASC
        }
        filter: {
          sourceInstanceName: { eq: "careers" }
          internal: { mediaType: { eq: "text/markdown" } }
        }
      ) {
        nodes {
          childMarkdownRemark {
            fields {
              slug
            }
            id
          }
        }
      }
    }
  `)
  // console.log(JSON.stringify(result, null, 2))

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your post`, result.errors)
  }

  const blogPosts = result.data.blog.nodes
  const eventPosts = result.data.events.nodes
  const careerPosts = result.data.careers.nodes

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const eventPost = path.resolve(`./src/templates/event-post.js`)
  const careerPost = path.resolve(`./src/templates/career-post.js`)

  if (blogPosts.length > 0 && eventPosts.length > 0 && careerPosts.length > 0) {
    blogPosts.forEach((node, index) => {
      const previousId =
        index === 0 ? null : blogPosts[index - 1].childMarkdownRemark.id
      const nextId =
        index === blogPosts.length - 1
          ? null
          : blogPosts[index + 1].childMarkdownRemark.id

      // console.log(JSON.stringify(previousPostId, null, 0))
      // console.log(JSON.stringify(node.childMarkdownRemark, null, 0))

      createPage({
        path: `/bulletin-board${node.childMarkdownRemark.fields.slug}`,
        component: blogPost,
        context: {
          id: node.childMarkdownRemark.id,
          previousId,
          nextId,
        },
      })
      createRedirect({
        fromPath: node.childMarkdownRemark.fields.slug,
        toPath: `/bulletin-board${node.childMarkdownRemark.fields.slug}`,
        isPermanent: true,
        redirectInBrowser: true,
      })
    })

    careerPosts.forEach(node => {
      createPage({
        path: node.childMarkdownRemark.fields.slug,
        component: careerPost,
        context: {
          id: node.childMarkdownRemark.id,
        },
      })
    })

    eventPosts.forEach((node, index) => {
      const previousId =
        index === 0 ? null : eventPosts[index - 1].childMarkdownRemark.id
      const nextId =
        index === eventPosts.length - 1
          ? null
          : eventPosts[index + 1].childMarkdownRemark.id

      createPage({
        path: node.childMarkdownRemark.fields.slug,
        component: eventPost,
        context: {
          id: node.childMarkdownRemark.id,
          previousId,
          nextId,
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

if (typeof document !== `undefined`) {
  return {
    // Do something with the document
    // Call your modules and libraries
  }
} else {
  return {
    // Do something different while window and document are not defined on the server
  }
}
