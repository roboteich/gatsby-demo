import React from 'react'
import Link from 'gatsby-link'

const Tags = ({ pathContext }) => {
    const {posts, tagName} = pathContext

    if(posts) {
        return (
            <div>
                <span>
                    Posts about { tagName }
                    <ul>
                        <li>hi {posts.length}</li>
                        {
                            posts.map((post, index) => {
                                return (
                                    <li key={`post-${index}`}>
                                        <Link to={`${post.frontmatter.path}`}>
                                            {post.frontmatter.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </span>
            </div>
        )
    }
}

export default Tags