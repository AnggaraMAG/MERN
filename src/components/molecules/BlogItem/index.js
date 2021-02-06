import React from 'react'
import { RegisterBG1 } from '../../../assets'
import "./blogitem.scss"

const BlogItem = ({ ...rest }) => {
  return (
    <div className="blog-item" {...rest}>
      <img className="blog-image" src={RegisterBG1} alt="post" />
      <div className="content-detail-wrapper">
        <p className="blog-title">Title Blog</p>
        <p className="blog-autor-date">Author - Date post</p>
        <p className="blog-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. .</p>
      </div>
    </div>
  )
}

export default BlogItem
