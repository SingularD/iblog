import React from 'react'
import './style.css'

class EditItem extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="writing col-10 justify-content-center row">
        <div className="col-10 writing-content pt-5">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">文章标题</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="文章标题"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">文章专题</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>HTTP</option>
              <option>JAVA</option>
              <option>ReactJs</option>
              <option>Spring Boot</option>
              <option>其它</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">文章简介</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder="文章简介"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">文章内容</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="文章标题"></textarea>
          </div>
          <div className="writing-preview">
            <h2>预览:</h2>

          </div>
          <div className="row justify-content-around">
            <button className="btn btn-primary col-3">预览</button>
            <button className="btn btn-success col-3">提交</button>
          </div>
        </div>
      </div>
    )
  }

}

export default EditItem
