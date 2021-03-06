import React from 'react'
import marked from "marked";
import highLight from "highlight.js";

class Writing extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      postTitle: '',
      category: '',
      abstract: '',
      postContent: '',
      showMarkdown: {  __html: ''}
    }
    this.getInputValue = this.getInputValue.bind(this)
    this.handlePreview = this.handlePreview.bind(this)
  }
  getInputValue(e) {
    let temp = {}
    temp[e.target.name]= e.target.value
    this.setState(temp)
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
  handlePreview() {
    this.setState({
      showMarkdown: this.getMarkdownText()
    })
  }
  render() {
    return (
      <div className="writing col-10 justify-content-center row">
        <div className="col-10 writing-content pt-5">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">文章标题</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="文章标题"
              name="postTitle"
              onChange={this.getInputValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">文章专题</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="category"
              onChange={this.getInputValue}
            >
              <option>HTTP</option>
              <option>JAVA</option>
              <option>ReactJs</option>
              <option>Spring Boot</option>
              <option>其它</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">文章简介</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder="文章简介"
              name="abstract"
              onChange={this.getInputValue}
            >
            </textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">文章内容</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="文章标题"
              name="postContent"
              onChange={this.getInputValue}
            >
            </textarea>
          </div>
          <div className="writing-preview">
            <h2>预览:</h2>

          </div>
          <div className="row justify-content-around">
            <button
              className="btn btn-primary col-3"
              onClick={this.handlePreview}
            >
              预览
            </button>
            <button className="btn btn-success col-3">提交</button>
          </div>
          <div
            className="p-5 mt-5 border"
            dangerouslySetInnerHTML={this.state.showMarkdown}
          >
          </div>
        </div>
      </div>
      )
  }

}

export default Writing
