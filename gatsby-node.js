const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators

    const postTemplate = path.resolve('src/templates/story-post.js')
    return graphql(`
    {
    allMarkdownRemark{
        edges{
            node{
                html
                id
                frontmatter{
                    path
                    title
                    author
                    }
                }
            }
        }
    }
    `).then(res => {
        if(res.errors){
            return Promise.return(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}