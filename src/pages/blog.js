import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from 'components/Router'
//
import styled from 'styled-components';
//import {Jumbo, BlogTitle, JumboImg } from '../components/Jumbo';


export default function Blog() {
  const { posts } = useRouteData()
  return (
    <div className="align-center">
      <h1>It's blog time.</h1>
      <div>
        <a href="#bottom" id="top">
          Scroll to bottom!
        </a>
      </div>
      <br />
      All Posts:
        {posts.map(post => (
            <PostsBox key={post.id}>
              <Link to={`/blog/post/${post.id}/`}>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogTime>{post.created_at.slice(0,16).replace('T',' - ')}</BlogTime>
              </Link>
            </PostsBox>
        ))}
      <a href="#top" id="bottom">
        Scroll to top!
      </a>
    </div>
  )
}


const PostsBox = styled.div`
  border: 0px solid #ddd;
  border-radius: 5px;
  max-width: 640px;
  margin: 20px auto;
  padding: 10px 20px 1px 20px;
  background-color: #ddd;
  box-shadow: 10px 10px 15px -10px black;
`;

const BlogTitle = styled.h2`
  font-size: 20px;
  text-align: left;
`;

const BlogTime = styled.p`
  font-size: 12px;
  text-align: right;
`;
