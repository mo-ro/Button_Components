const path = require(`path`)
exports.createPages = async ({
  actions,
  graphql,
  reporter
}) => {
  const {
    createPage
  } = actions
  const blogPostTemplate = path.resolve(`src/templates/sample.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({
    node
  }) => {
    console.log(node, 90909090)
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}