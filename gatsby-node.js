/* *
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

// You can delete this file if you're not using it
// async function createProjects({ actions, graphql }) {
async function createProjects({ actions, graphql }) {
  const projectTemplate = path.resolve(
    "./src/components/templates/ProjectTemplate.jsx"
  )
  const result = await graphql(`
    query CREATE_PAGES {
      allSanityProject(sort: { order: ASC, fields: title }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const allProjects = result.data.allSanityProject.edges.map(({ node }) => node)

  allProjects.forEach((project, i) => {
    actions.createPage({
      path: `/projects/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,

        // pagePrefix: "/projects/",
      },
    })
  })
}

exports.createPages = async ({ actions, graphql }) => {
  await Promise.all([createProjects({ actions, graphql })])
}
