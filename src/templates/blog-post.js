import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Template = ({data, pathContext}) => {
    const { markdownRemark: post} = data
    const { frontmatter, html} = post
    const {title, date} = frontmatter
    const {next, prev} = pathContext

    return (
        <div>
            <Helmet title={`${title} - My Blog`} />
            <div>
                <h1>{title}</h1>
                <h3>{date}</h3>
            </div>
            <div dangerouslySetInnerHTML={{__html:html}} />
            <p>
                {prev && (<Link to={prev.frontmatter.path}>{prev.frontmatter.title}</Link>)}
                {next && (<Link to={next.frontmatter.path}>{next.frontmatter.title}</Link>)}
            </p>
        </div>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}) {
            html
            frontmatter {
                title
                date(formatString: "MMMM, DD, YYYY")
                path
                tags
                excerpt
            }
        }
    }
`

export default Template