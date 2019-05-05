import React from 'react'
import marked from 'marked'
import highLight from 'highlight.js'


import NavBar from './NavBar'
import SiteInfo from "./SiteInfo"
import { postData } from "../../Data";


class Post extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      postTitle: postData.postTitle,
      postDate: postData.postDate,
      postContent: postData.postContent
    }
  }
  getMarkdownText() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code) {
        return highLight.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
    const rawMarkup = marked(this.state.postContent)
    return { __html: rawMarkup }
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="col-12 col-lg-9 row post justify-content-center">
          <div className="col-11 post-header">
            <p className="post-header-title">{this.state.postTitle}</p>
            <p>{this.state.postDate}</p>
            <div dangerouslySetInnerHTML={this.getMarkdownText()}></div>
          </div>
          <SiteInfo />
        </div>
      </React.Fragment>
      )
  }
}

export default Post
