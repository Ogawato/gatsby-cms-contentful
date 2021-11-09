// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type == "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    console.log(slug)

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
  // Transform the new node here and create a new node or
  // create a new node field.
}
