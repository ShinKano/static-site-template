import React from 'react'
import { useRouteData } from 'react-static'
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';
//
import { Link } from 'components/Router'

export default function Post() {
  const { post } = useRouteData()
  const html = marked(post.content);

  return (
    <div>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <h3>{post.title}</h3>
      { ReactHtmlParser(html) }
      <p>{post.created_at}</p>
    </div>
  )
}